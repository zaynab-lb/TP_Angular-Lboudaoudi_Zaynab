import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EditableUser, User } from '../models/User';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MenuComponent],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  userId!: number;
  //user: Partial<User> = {};
  errorMessage = '';
  successMessage = '';

  user: EditableUser = {
  userId: 0,
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
  userType: 'Member'
};

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUser();
  }


   loadUser(): void {
    this.userService.getAllUsers().subscribe(users => {
      const found = users.find(u => u.userId === this.userId);
      if (found) this.user = found;
    });
  }


  onSubmit(form: NgForm): void {
  if (form.valid) {
    console.log('User à envoyer :', this.user); // 👈

    this.userService.updateUser(this.userId, this.user).subscribe({
      next: () => {
        this.successMessage = 'Utilisateur mis à jour avec succès';
        setTimeout(() => this.router.navigate(['/users']), 1500);
      },
      error: (err) => {
        console.error("Erreur PUT :", err); // 👈
        this.errorMessage = 'Erreur lors de la mise à jour';
      }
    });
  }
}


  cancel(): void {
    this.router.navigate(['/users']);
  }

}
