import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    MessageModule,
    MessagesModule,
    InputTextModule,
    MegaMenuModule,
    TableModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    MessageModule,
    MessagesModule,
    InputTextModule,
    MegaMenuModule,
    TableModule,
  ],
  providers: [
    AuthService,
    UsersService,
    MessageService
  ]
})
export class SharedModule { }
