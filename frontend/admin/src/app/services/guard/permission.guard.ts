import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate,
    CanActivateChild, Router
} from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';
@Injectable({ providedIn: 'root' })

export class PermissionGuard implements CanActivate, CanActivateChild {
    constructor(public router: Router, public authenticationService: AuthenticationService) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const data: Array<string> = route.data.function;
        // if (data) {
        //     if (!this.authenticationService.hasPermissions(...data)) {
        //         this.router.navigateByUrl('/403');
        //         return false;
        //     }
        // }
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot): boolean {
        return true;
    }

}
