import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from "@angular/router";
import { Observable  } from "rxjs/Rx";


export class HomeGuard implements CanActivate {
    canActivate(
            route:ActivatedRouteSnapshot, 
            state: RouterStateSnapshot
            ): Observable<boolean> | boolean {
        
        return confirm("Do you allow geolocation?")
        
    }
}