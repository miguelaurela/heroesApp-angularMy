import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService:AuthService,
              private route:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   if (this.authService.auth.id) {
    //     return true
    //   }
    //   console.log('bloqueado por el authGuard - canActivate');
    // return false;
    return this.authService.verificacionAutenticacion()
    .pipe(
      tap(estaAutenticado=>{
        if (!estaAutenticado) {
          this.route.navigate(['./auth/login'])
        console.log('bloqueado por el authGuard - canActivate');

        }
      })
    )

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log('canLoad',false);
      // console.log(route);
      // console.log(segments);
      return this.authService.verificacionAutenticacion()
      .pipe(
        tap(estaAutenticado=>{
          if (!estaAutenticado) {
            this.route.navigate(['./auth/login'])
            console.log('bloqueado por el authGuard - canLoad');
          }
        })
      )
    //   if (this.authService.auth.id) {
    //     return true
    //   }
      
    // return false;
  }
}
