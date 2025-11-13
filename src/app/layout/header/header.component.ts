import {Component, inject, OnInit} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {Router, RouterOutlet} from '@angular/router';
import {Divider} from 'primeng/divider';
import {SidebarMenuComponent} from '../components/sidebar-menu/sidebar-menu.component';
import {Menu} from 'primeng/menu';
import {AuthService} from '../../features/auth/service/auth.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [
    Avatar,
    RouterOutlet,
    Divider,
    SidebarMenuComponent,
    Menu
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent implements OnInit {

  sidebarMenu = [
    {
      id: 1,
      title: 'داشبورد',
      route: '/dashboard',
      iconName:'pi-gauge'
    },
    {
      id: 2,
      title: 'مدیریت کاربران',
      route: '/user-management',
      iconName:'pi-user',
    }
  ];
  items?: MenuItem[];

  protected readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.items = [
      {
        items: [
          {
            label: this.authService.getUser()?.name
          },
          {
            label: 'خروج',
            icon: 'pi pi-sign-out',
            iconStyle: {
              color: 'red'
            },
            styleClass: 'logout-item',
            command: () => {
              console.log('click');
              this.router.navigate(['/login']);
              this.authService.removeUser();
            }
          }
        ]
      }
    ]
  }

}
