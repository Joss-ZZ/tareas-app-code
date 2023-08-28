import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    
    if(this.authService.getUser() == null) {
      this.router.navigateByUrl('/auth');
      return false;
    } else {
      return true;
    }

  }
  
}