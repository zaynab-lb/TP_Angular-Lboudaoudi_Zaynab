import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { UserType } from '../../../models/User';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
  const expectedRole = route.data['role'] as UserType;
  const currentUser = this.userService.getCurrentUser();

  console.log("Utilisateur courant :", currentUser);
  console.log("Role attendu :", expectedRole);
  console.log("Role utilisateur courant :", currentUser?.UserType);

  if (!currentUser || currentUser.UserType.toString() !== expectedRole.toString()) {
    this.router.navigate(['/signin']);
    return false;
  }
  
  return true;
}
}
