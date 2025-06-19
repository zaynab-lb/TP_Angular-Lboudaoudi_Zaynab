import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserType } from '../models/User';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: 0,
    userType: 'Member' as UserType
  };
  errorMessage = '';
  successMessage = '';
  
  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.userService.addUser({
  ...this.user,
  isAdminRequest: true
})
.subscribe({
        next: () => {
          this.successMessage = "Utilisateur ajouté avec succès";
          setTimeout(() => this.router.navigate(['/users']), 1500);
        },
        error: (err) => {
          this.errorMessage = err.error?.error || "Erreur lors de l'ajout";
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
