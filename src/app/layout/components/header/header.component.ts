import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private usersService: UsersService, private router: Router) { }

  logout() {
    this.usersService.logout();
    this.router.navigate(['auth']);
  }

}
