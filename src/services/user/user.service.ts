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
  // Suppression de la restriction ici
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
    this.router.navigate(['/signin']);
  }

   isAdmin(): boolean {
    return this.currentUser?.UserType === UserType.Admin;
  }

  isMember(): boolean {
    return this.currentUser?.UserType === UserType.Member;
  }

getAllUsers(): Observable<any[]> {
  return this.http.get<any[]>('/api/users');
}

updateUser(userId: number, userData: any): Observable<any> {
  return this.http.put(`/api/users/${userId}`, userData);
}

deleteUser(userId: number): Observable<any> {
  return this.http.delete(`/api/users/${userId}`);
}

addUser(userData: any): Observable<any> {
  const body = {
    ...userData,
    isAdminRequest: true  // autorise la création d’un admin côté backend
  };
  return this.http.post('/api/signup', body);
}

}