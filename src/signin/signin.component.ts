import { Component } from '@angular/core';
import { Router , RouterLink } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { IUserCredentials } from '../models/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-signin',
  standalone: true,
  imports: [FormsModule, CommonModule , RouterLink],
  templateUrl: './signin.component.html',  
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
   credentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false;
 constructor(private userService: UserService, private router: Router) { }

  signIn() {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: (userData) => {
        this.userService.setCurrentUser(userData);
        this.router.navigate(['/catalog']);
      },
      error: () => (this.signInError = true)
    });
  }

}
