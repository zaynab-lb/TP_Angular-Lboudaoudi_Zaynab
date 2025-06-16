import { CanActivateFn } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (!this.userService.isAdmin()) {
      this.router.navigate(['/catalog']);
      return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (!this.userService.isMember()) {
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }
}
