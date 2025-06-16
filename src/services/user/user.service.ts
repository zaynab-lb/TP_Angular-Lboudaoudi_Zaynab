import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User , UserType, IUserCredentials, IRegisterData } from '../../models/User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  signIn(credentials: IUserCredentials): Observable<any> {
    return this.http.post('/api/signin', credentials);
  }

  signUp(userData: IRegisterData): Observable<any> {
  if (userData.userType !== UserType.Member) {
    throw new Error("Seuls les utilisateurs de type Member peuvent s'inscrire");
  }
  return this.http.post('/api/signup', userData); 
}


  getCurrentUser(): User | null {
    return this.currentUser;
  }

  setCurrentUser(userData: any): void {
    if (userData) {
     this.currentUser = new User(
      userData.userId,
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password,
      userData.age
    );

    this.currentUser.UserType = userData.userType || UserType.Member;

    if (this.currentUser.UserType === UserType.Admin) {
        this.router.navigate(['/home']);
      } else if (this.currentUser.UserType === UserType.Member) {
        this.router.navigate(['/catalog']);
      }
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  signOut(): void {
    this.currentUser = null;
  }

   isAdmin(): boolean {
    return this.currentUser?.UserType === UserType.Admin;
  }

  isMember(): boolean {
    return this.currentUser?.UserType === UserType.Member;
  }
}