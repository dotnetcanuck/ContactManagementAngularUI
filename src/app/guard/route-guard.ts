import { Injectable, NgZone } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { Helper } from './helper';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private zone: NgZone, private router: Router, private alertifySvc: AlertifyService) {};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!Helper.isNextStep) {
        this.zone.run(() => {
            this.alertifySvc.error('You are not allowed to navigate directly to this page.');
            this.router.navigate(['/home']);
        });
        return false;
    } else {
        return Helper.isNextStep || true;  // allow navigation
      }
  }
}
