import { Routes } from '@angular/router';
import {authGuard} from './shared/guards/auth.guard';
import {isLogginGuard} from './shared/guards/is-loggin.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [isLogginGuard],
    loadChildren: () => import('./features/auth/auth.routes'),
  },
  {
    path: 'user-management',
    canActivate: [authGuard],
    loadChildren: () => import('./features/user-managmenet/user.routes'),
  },
  {
    path: 'category-management',
    loadChildren: () => import('./features/category-management/category.routes'),
  },
  {
    path: '',
    pathMatch: 'full',
    canActivate: [authGuard],
    loadChildren: () => import('./features/user-managmenet/user.routes'),
    providers: [],
  },
];
