import {Injectable, Signal, signal} from '@angular/core';
import {User} from '../models/user';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = signal<User[]>([
    { id: 1, name: 'بهاره مرندی', username: 'bahareh',   password: 'pass1', role: 'user', phoneNumber: 12345678911, email:'bahareh@gmail.com', status: true },
    { id: 2, name: 'محمود پرنده', username: 'mahmoud',     password: 'pass2', role: 'user', phoneNumber: 12345678912, email:'mahmoud@gmail.com', status: true },
    { id: 3, name: 'سمانه مرندی', username: 'samaneh',   password: 'pass3', role: 'user', phoneNumber: 12345678913, email:'samaneh@gmail.com', status: true },
    { id: 4, name: 'بهاره رهنما', username: 'baharehrahnema',   password: 'pass4', role: 'user', phoneNumber: 12345678914, email:'baharehrahnema@gmail.com', status: true },
    { id: 5, name: 'مصطفی زمانی', username: 'mostafa',     password: 'pass5', role: 'user', phoneNumber: 12345678915, email:'mostafa@gmail.com', status: true },
    { id: 6, name: 'طاهره پرنده', username: 'tahereh',   password: 'pass6', role: 'user', phoneNumber: 12345678916, email:'tahereh@gmail.com', status: true },
    { id: 7, name: 'یاسمین آقایی', username: 'yasmin',   password: 'pass7', role: 'user', phoneNumber: 12345678917, email:'yasmin@gmail.com', status: true },
    { id: 8, name: 'زهرا اقبالی',  username: 'zeghbali',   password: 'pass8', role: 'user', phoneNumber: 12345678918, email:'zeghbali@gmail.com', status: true },
    { id: 9, name: 'اشکان عبدی', username: 'ashki',    password: 'pass9', role: 'admin', phoneNumber: 12345678919, email:'ashki@gmail.com', status: true },
    { id: 10, name: 'مبینا رازقی', username: 'mobinariz',   password: 'pass10', role: 'user', phoneNumber: 12345678920, email:'mobinariz@gmail.com', status: true },
    { id: 11, name: 'توماس ادیسون', username: 'tomasEdi',   password: 'pass11', role: 'user', phoneNumber: 12345678921, email:'tomasEdi@gmail.com', status: true },
    { id: 12, name: 'سحر رضایی',    username: 'saharraz',   password: 'pass12', role: 'user', phoneNumber: 12345678922, email:'saharraz@gmail.com', status: true },
    { id: 13, name: 'ندا مرادی',     username: 'nedamar',    password: 'pass13', role: 'user', phoneNumber: 12345678923, email:'nedamar@gmail.com', status: true },
    { id: 14, name: 'ترانه احمدی',   username: 'taraneham',  password: 'pass14', role: 'user', phoneNumber: 12345678924, email:'taraneham@gmail.com', status: false },
    { id: 15, name: 'مهسا کریمی',    username: 'mahsakri',   password: 'pass15', role: 'user', phoneNumber: 12345678925, email:'mahsakri@gmail.com', status: false },
    { id: 16, name: 'لیلا قاسمی',    username: 'leilaghs',   password: 'pass16', role: 'user', phoneNumber: 12345678926, email:'leilaghs@gmail.com', status: true },
    { id: 17, name: 'شیرین حسینی',  username: 'shirinhos',  password: 'pass17', role: 'user', phoneNumber: 12345678927, email:'shirinhos@gmail.com', status: false },
    { id: 18, name: 'ناهید روشن',    username: 'nahidrosh',  password: 'pass18', role: 'user', phoneNumber: 12345678928, email:'nahidrosh@gmail.com', status: true },
    { id: 19, name: 'پرنیا زمانی',    username: 'parniazam',  password: 'pass19', role: 'user', phoneNumber: 12345678929, email:'parniazam@gmail.com', status: true },
    { id: 20, name: 'نگار موسوی',    username: 'negarmos',   password: 'pass20', role: 'user', phoneNumber: 12345678930, email:'negarmos@gmail.com', status: false }
  ]);

  getAllUsers(): Signal<User[]> {
    return this.users
  }

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
    const user = this.users().find(user => user.username === enteredUser.username);
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
