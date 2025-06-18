import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
   users: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des utilisateurs';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  editUser(userId: number): void {
    this.router.navigate(['/edit-user', userId]);
  }

  refresh(): void {
    this.loadUsers();
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}
