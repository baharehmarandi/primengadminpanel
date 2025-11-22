import { Component } from '@angular/core';
import {Toast} from 'primeng/toast';
import {MainComponent} from './layout/main/main.component';
import {ConfirmDialog} from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    Toast,
    MainComponent,
    ConfirmDialog
  ],
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'primengadminpanel';
}
