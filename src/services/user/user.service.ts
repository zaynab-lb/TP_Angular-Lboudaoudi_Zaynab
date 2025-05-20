import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

export interface IUserCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User | null = null;

  constructor(private http: HttpClient) { }

  signIn(credentials: IUserCredentials): Observable<any> {
    return this.http.post('/api/signin', credentials);
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
        userData.address,
      );
      this.currentUser.UserType = userData.userType;
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  signOut(): void {
    this.currentUser = null;
  }
}