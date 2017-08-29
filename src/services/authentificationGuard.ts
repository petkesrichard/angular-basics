import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthentificationGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('LOGED_IN_USER')) {
            return true;
        }

        // not logged in so redirect to login page with the return img and return false
        this.router.navigate(['login']);
        return false;
    }
}