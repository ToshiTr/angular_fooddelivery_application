import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../shared/service/auth_service/authentication.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService)
  if(authService.getIsLoggedIn() === true)
  {
     return true;
  }
  router.navigate(['/login']);
  return false;
};
