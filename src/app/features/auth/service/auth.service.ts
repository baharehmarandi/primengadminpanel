import { Injectable } from '@angular/core';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
    { id: 1, name: 'bahareh marandi', username: 'bahareh',   password: 'pass1', role: 'user', phoneNumber: 12345678911 },
    { id: 2, name: 'mahmoud parandeh', username: 'mahmoud',     password: 'pass2', role: 'user', phoneNumber: 12345678912 },
    { id: 3, name: 'samaneh marandi', username: 'samaneh',   password: 'pass3', role: 'user', phoneNumber: 12345678913 },
    { id: 4, name: 'bahareh rahnema', username: 'baharehrahnema',   password: 'pass4', role: 'user', phoneNumber: 12345678914 },
    { id: 5, name: 'mostafa zamani', username: 'mostafa',     password: 'pass5', role: 'user', phoneNumber: 12345678915 },
    { id: 6, name: 'tahereh parandeh', username: 'tahereh',   password: 'pass6', role: 'user', phoneNumber: 12345678916 },
    { id: 7, name: 'yasmin aghayi', username: 'yasmin',   password: 'pass7', role: 'user', phoneNumber: 12345678912 },
    { id: 8, name: 'zahra eghbali',  username: 'zeghbali',   password: 'pass8', role: 'user', phoneNumber: 12345678912 },
    { id: 9, name: 'ashkan', username: 'ashki',    password: 'pass9', role: 'admin', phoneNumber: 12345678912 },
    { id: 10, name: 'mobina razeghian', username: 'mobinariz',   password: 'pass10', role: 'user', phoneNumber: 12345678912 },
  ];

  saveToStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  findUser(enteredUser: User) {
    return this.users.find(user => user.username === enteredUser.username)?.password === enteredUser.password;
  }
}
