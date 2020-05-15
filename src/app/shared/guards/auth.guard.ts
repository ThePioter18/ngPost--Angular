import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../components/auth/login/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.userFire$.pipe(
      map(user => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
    );
  }

}
