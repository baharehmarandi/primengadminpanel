import { Component } from '@angular/core';
import {Toast} from 'primeng/toast';
import {MainComponent} from './layout/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    Toast,
    MainComponent
  ],
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'primengadminpanel';
}
