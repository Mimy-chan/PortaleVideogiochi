import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginAdminGuardService implements CanActivate {

  constructor(private route:Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
   if(sessionStorage.getItem('admin') != null && sessionStorage.getItem('admin') != ''){
     return true;
     this.route.navigateByUrl('editGame');
   }else{
     return false;
   }


  }












}
