import { Component, OnInit } from '@angular/core';
import { HomeState } from './models/home.model';
import { NgForm } from '@angular/forms';
import { MegaMenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UsersService } from '../shared/services/users.service';
import { TokenStorageService } from '../core/services/token-storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: HomeState = {
    firstName: null,
    lastName: null,
    email: null,
    address: null,
    phoneNumber: null,
    zipCode: null,
    countryCode: null
  }
  menus: MegaMenuItem[];

  constructor(
    private _router: Router,
    private _usersService: UsersService,
    private _messageService: MessageService,
    private _tokenStorageService: TokenStorageService
  ) { }

  setMenus() {
    this.menus = [
      {
        label: 'Home', icon: '',
      },
      {
        label: 'List', icon: '',
        command: () => {
          this._router.navigate(['list'])
        }
      },
      {
        label: 'Sign Out', icon: '',
        command: () => {
          this._tokenStorageService.clearToken();
          this._router.navigateByUrl('/');
        }
      }
    ]
  }

  ngOnInit(): void {
    this.setMenus();
  }

  async onSubmit(submitterName: string, f: NgForm) {
    this._usersService.createUser(this.form).subscribe(response => {
      f.resetForm();
      this._messageService.add({ severity: 'success', summary: 'Info', detail: response.message, life: 3000 });
    }, error => {
      if (error != null) {
        this._messageService.add({ severity: 'error', summary: 'Info', detail: error, life: 3000 });
      }
    })
  }

}