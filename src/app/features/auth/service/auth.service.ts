import { Injectable } from '@angular/core';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
    { id: 1, name: 'بهاره مرندی', username: 'bahareh',   password: 'pass1', role: 'user', phoneNumber: 12345678911 },
    { id: 2, name: 'محمود پرنده', username: 'mahmoud',     password: 'pass2', role: 'user', phoneNumber: 12345678912 },
    { id: 3, name: 'سمانه مرندی', username: 'samaneh',   password: 'pass3', role: 'user', phoneNumber: 12345678913 },
    { id: 4, name: 'بهاره رهنما', username: 'baharehrahnema',   password: 'pass4', role: 'user', phoneNumber: 12345678914 },
    { id: 5, name: 'مصطفی زمانی', username: 'mostafa',     password: 'pass5', role: 'user', phoneNumber: 12345678915 },
    { id: 6, name: 'طاهره پرنده', username: 'tahereh',   password: 'pass6', role: 'user', phoneNumber: 12345678916 },
    { id: 7, name: 'یاسمین آقایی', username: 'yasmin',   password: 'pass7', role: 'user', phoneNumber: 12345678912 },
    { id: 8, name: 'زهرااقبالی',  username: 'zeghbali',   password: 'pass8', role: 'user', phoneNumber: 12345678912 },
    { id: 9, name: 'اشکان عبدی', username: 'ashki',    password: 'pass9', role: 'admin', phoneNumber: 12345678912 },
    { id: 10, name: 'مبینا رازقی', username: 'mobinariz',   password: 'pass10', role: 'user', phoneNumber: 12345678912 },
  ];

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
    const user = this.users.find(user => user.username === enteredUser.username);
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
