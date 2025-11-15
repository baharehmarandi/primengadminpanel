import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../features/auth/service/auth.service';

export const isLogginGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getUser();

  if (user) {
    router.navigate(['/user-management']);
    return false;
  } else {
    return true;
  }

};
