import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean | UrlTree> {
    return this.authService.isLoggedIn().then((authenticated) => {
      if (authenticated) {
        return true;
      } else {
        console.log('NOT AUTHENTICATED', route);
        alert(
          'You are not allowed to visit this page. Please login to continue. Current route:' +
            route
        );
        const urlTree = createUrlTreeFromSnapshot(route, ['..']);
        console.log(urlTree);
        return urlTree;
      }
    });
  }
  canActivateChild(route, state) {
    return this.canActivate(route, state);
  }
}
