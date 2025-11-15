import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../../features/auth/service/auth.service';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getUser();

  if (user) {
    return true; // اجازه ورود می‌دهد
  } else {
    router.navigate(['/login']);
    return false;
  }

};
