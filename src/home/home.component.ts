import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showUserList = false;

  constructor(public userService: UserService,  private router: Router) {}

  toggleUserList(): void {
    this.showUserList = !this.showUserList;
  }

  navigateToUserList(): void {
    this.router.navigate(['/users']);
  }

}
