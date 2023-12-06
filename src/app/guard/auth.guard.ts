import { CanActivateFn,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  




  return true;
};
