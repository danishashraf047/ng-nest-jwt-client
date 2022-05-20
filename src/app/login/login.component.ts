import { Component, OnInit } from '@angular/core';
import { LoginState } from './models/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { MessageService } from 'primeng/api';
import { TokenStorageService } from '../core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginState = { username: '', password: '' };
  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _tokenStorageService: TokenStorageService,
    private _messageService: MessageService
  ) { }

  async ngOnInit(): Promise<void> {
    if (this._tokenStorageService.getToken()) {
      await this._router.navigate(['home']);
    }
  }

  async onSubmit(submitterName: string) {
    if (submitterName == 'login') {
      this._authService.signIn(this.form).subscribe(async response => {
        await this._tokenStorageService.saveToken(response.data.accessToken);
        await this._router.navigate(['home'])
      }, error => {
        if (error != null) {
          this._messageService.add({ severity: 'error', summary: 'Info', detail: error, life: 3000 });
        }
      })
    }
  }

}