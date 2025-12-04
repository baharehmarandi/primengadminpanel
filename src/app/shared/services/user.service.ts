import {inject, Injectable, signal} from '@angular/core';
import {User} from '../../features/auth/models/user';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly messageService = inject(MessageService);

  data: User[] = [
    { id: 1, name: 'بهاره مرندی', username: 'bahareh',   password: 'pass1', role: 'مدیر', roleCode: 'manager', phoneNumber: 12345678911, email:'bahareh@gmail.com', status: true },
    { id: 2, name: 'محمود پرنده', username: 'mahmoud',     password: 'pass2', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678912, email:'mahmoud@gmail.com', status: true },
    { id: 3, name: 'سمانه مرندی', username: 'samaneh',   password: 'pass3',role: 'کاربر', roleCode: 'user', phoneNumber: 12345678913, email:'samaneh@gmail.com', status: true },
    { id: 4, name: 'بهاره رهنما', username: 'baharehrahnema',   password: 'pass4', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678914, email:'baharehrahnema@gmail.com', status: true },
    { id: 5, name: 'مصطفی زمانی', username: 'mostafa',     password: 'pass5', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678915, email:'mostafa@gmail.com', status: true },
    { id: 6, name: 'طاهره پرنده', username: 'tahereh',   password: 'pass6', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678916, email:'tahereh@gmail.com', status: true },
    { id: 7, name: 'یاسمین آقایی', username: 'yasmin',   password: 'pass7', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678917, email:'yasmin@gmail.com', status: true },
    { id: 8, name: 'زهرا اقبالی',  username: 'zeghbali',   password: 'pass8', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678918, email:'zeghbali@gmail.com', status: true },
    { id: 9, name: 'اشکان عبدی', username: 'ashki',    password: 'pass9', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678919, email:'ashki@gmail.com', status: true },
    { id: 10, name: 'مبینا رازقی', username: 'mobinariz',   password: 'pass10', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678920, email:'mobinariz@gmail.com', status: true },
    { id: 11, name: 'توماس ادیسون', username: 'tomasEdi',   password: 'pass11', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678921, email:'tomasEdi@gmail.com', status: true },
    { id: 12, name: 'سحر رضایی',    username: 'saharraz',   password: 'pass12', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678922, email:'saharraz@gmail.com', status: true },
    { id: 13, name: 'ندا مرادی',     username: 'nedamar',    password: 'pass13', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678923, email:'nedamar@gmail.com', status: true },
    { id: 14, name: 'ترانه احمدی',   username: 'taraneham',  password: 'pass14', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678924, email:'taraneham@gmail.com', status: false },
    { id: 15, name: 'مهسا کریمی',    username: 'mahsakri',   password: 'pass15', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678925, email:'mahsakri@gmail.com', status: false },
    { id: 16, name: 'لیلا قاسمی',    username: 'leilaghs',   password: 'pass16', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678926, email:'leilaghs@gmail.com', status: true },
    { id: 17, name: 'شیرین حسینی',  username: 'shirinhos',  password: 'pass17', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678927, email:'shirinhos@gmail.com', status: false },
    { id: 18, name: 'ناهید روشن',    username: 'nahidrosh',  password: 'pass18', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678928, email:'nahidrosh@gmail.com', status: true },
    { id: 19, name: 'پرنیا زمانی',    username: 'parniazam',  password: 'pass19', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678929, email:'parniazam@gmail.com', status: true },
    { id: 20, name: 'نگار موسوی',    username: 'negarmos',   password: 'pass20', role: 'کاربر', roleCode: 'user', phoneNumber: 12345678930, email:'negarmos@gmail.com', status: false }
  ]

  users = signal<User[]>([]);

  getUsers(search?: string): void {
    this.users.set(search ? (this.data.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))) : this.data);
  }

  getUserById(id: number){
    return signal(this.data.find(u => u.id === id));
  }

  addUser(user: User){
    this.users.update(currentUsers => [...currentUsers, {
      ...user,
      id: Math.max(...this.users().map(u => u.id)) + 1
    }]);
  }

  updateUser(user: User) {
    this.users.update(users => {
      let index = users.findIndex(u => u.id === user.id);
      if(index !== -1) {
        users[index]=user;
      }
      return users;
    })
  }

  deleteUser(id: number): void {
    this.users.update(users => users.filter(u => u.id !== id));
    this.messageService.add({ severity: 'success', summary: 'موفق', detail: 'کاربر با موفقیت حذف شد!' });
  }


}
