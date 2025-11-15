import {Component, inject, OnInit, signal} from '@angular/core';
import {Divider} from 'primeng/divider';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {AuthService} from '../../../auth/service/auth.service';

@Component({
  selector: 'app-user-management',
  imports: [
    Divider,
    IconField,
    InputIcon,
    InputText,
    Button,
    TableModule
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.less'
})
export class UserManagementComponent {

  private readonly authService = inject(AuthService);
  users = this.authService.getAllUsers();

  onSearch(event: any) {
    console.log('search user');
  }

  onAddUser(){
  console.log('add user');
  }
}
