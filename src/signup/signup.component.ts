import { Component } from '@angular/core';
import { Router , RouterModule } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { UserType, IRegisterData } from '../models/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [FormsModule, CommonModule, RouterModule],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerData: IRegisterData = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
    userType: UserType.Member  // Seuls les membres peuvent s'inscrire
  };

  signUpError = false;

  constructor(private userService: UserService, private router: Router) {}

  signUp(): void {
    try {
      this.userService.signUp(this.registerData).subscribe({
        next: (res) => {
          this.router.navigate(['/signin']);
        },
        error: (err) => {
          this.signUpError = true;
          console.error("Erreur d'inscription:", err);
        }
      });
    } catch (err) {
      this.signUpError = true;
      console.error("Erreur d'inscription:", err);
    }
  }
}
