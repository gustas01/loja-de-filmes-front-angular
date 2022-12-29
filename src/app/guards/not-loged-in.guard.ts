import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class NotLogedInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.userService.getCookie('token')){
        this.router.navigate([''])
        return false
      }
    
      return true;
  }
  
}
