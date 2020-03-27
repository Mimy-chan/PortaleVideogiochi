import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private route:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(sessionStorage.getItem('user') != null && sessionStorage.getItem('user') !== ''){
      return true;
    }else{
      this.route.navigateByUrl('/login');
      return false;
    }



  }
  
}
