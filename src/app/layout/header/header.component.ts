import {Component, inject, input, OnDestroy, OnInit, signal} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {Router, RouterOutlet} from '@angular/router';
import {Divider} from 'primeng/divider';
import {SidebarMenuComponent} from '../components/sidebar-menu/sidebar-menu.component';
import {Menu} from 'primeng/menu';
import {AuthService} from '../../features/auth/service/auth.service';
import {MenuItem} from 'primeng/api';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {SidebarMenu} from '../models/sidebar-menu.interface';
import {debounceTime, distinctUntilChanged, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    Avatar,
    RouterOutlet,
    Divider,
    SidebarMenuComponent,
    Menu,
    IconField,
    InputIcon,
    InputText,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent implements OnInit, OnDestroy {

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  sidebarMenu = signal<SidebarMenu[]>([
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
    },
    {
      id: 3,
      title: 'مدیریت دسته بندی',
      route: '/category-management',
      iconName:'pi-folder',
    },
    {
      id: 4,
      title: 'مدیریت محصول',
      route: '/product-management',
      iconName:'pi-shopping-bag',
    },
    {
      id: 5,
      title: 'مدیریت فروش',
      route: '/sell-management',
      iconName:'pi-receipt',
    },
    {
      id: 6,
      title: 'مدیریت نظرات',
      route: '/comment-management',
      iconName: 'pi-comments',
    },
    {
      id: 7,
      title: 'مدیریت نقش',
      route: '/role-management',
      iconName:'pi-address-book',
    },
    {
      id: 8,
      title: 'مدیریت کد تخفیف',
      route: '/discount-management',
      iconName:'pi-percentage',
    },
    {
      id: 9,
      title: 'مدیریت تگ ها',
      route: '/tags-management',
      iconName:'pi-tags',
    },
    {
      id: 10,
      title: 'درباره ما',
      route: '/about-us',
      iconName:'pi-id-card',
    }
  ]);
  filteredItems = signal<SidebarMenu[]>(this.sidebarMenu()) ;

  protected readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  items = signal<MenuItem[]>([
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
  ]);

  ngOnInit(): void {

    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((searchTerm) => {
      this.filteredItems.set(this.sidebarMenu()?.filter((menu) =>
        menu.title.includes(searchTerm)
      ))
    });
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
