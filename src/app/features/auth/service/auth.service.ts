import {inject, Injectable} from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../../../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userService = inject(UserService);

  allUsers = this.userService.users;
  saveToStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User| null {
    const user = localStorage.getItem('user');
    if(user) {
      return JSON.parse(user) as User;
    }
    return null;
  }

  findUser(enteredUser: User) {
    const user = this.allUsers().find((user: User) => user.username === enteredUser.username);
    if(user?.password === enteredUser.password) {
      this.saveToStorage(user);
      return true;
    } else {
      return false;
    }
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
