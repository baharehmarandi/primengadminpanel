import {Component, inject, input, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {SidebarMenu} from '../../models/sidebar-menu.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  imports: [
    NgClass
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.less'
})
export class SidebarMenuComponent {
  menu = input<SidebarMenu>();
  hover = signal<boolean>(false);

  protected readonly router = inject(Router)

  onClickMenu(){
    this.router.navigate([this.menu()?.route]);
  }
}
