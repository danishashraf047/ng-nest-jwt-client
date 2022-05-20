import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ListState } from './models/list.model';
import { UsersService } from '../shared/services/users.service';
import { TokenStorageService } from '../core/services/token-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  _menus: MegaMenuItem[];
  _state: ListState = {
    users: []
  };
  constructor(
    private _router: Router,
    private _messageService: MessageService,
    private _usersService: UsersService,
    private _tokenStorageService: TokenStorageService
  ) { }

  setMenus() {
    this._menus = [
      {
        label: 'Home', icon: '',
        command: () => {
          this._router.navigate(['home'])
        }
      },
      {
        label: 'List', icon: '',
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

  setState() {
    this._usersService.getUsers().subscribe(response => {
      this._state.users = response.data.users;
    }, error => {
      if (error != null) {
        this._messageService.add({ severity: 'error', summary: 'Info', detail: error, life: 3000 });
      }
    })
  }

  ngOnInit(): void {
    this.setMenus();
    this.setState();
  }

}