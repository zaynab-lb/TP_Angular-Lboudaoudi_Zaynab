import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public userService: UserService) {}

}
