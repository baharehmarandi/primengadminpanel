import { Component } from '@angular/core';
import {LoginComponent} from './features/auth/pages/login/login.component';
import {Toast} from 'primeng/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    LoginComponent,
    Toast
  ],
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'primengadminpanel';
}
