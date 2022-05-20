import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _tokenStorageService: TokenStorageService,
    private _router: Router
  ) { }
  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._tokenStorageService.getToken() != null) {
      return true;
    } else {
      this._router.navigate([], {});
    }
  }
}