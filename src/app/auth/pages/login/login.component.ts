import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm: FormGroup = this.fb.group({
    usu_Email: ['', [Validators.required, Validators.email]],
    usu_Pass: ['', Validators.required]
  });

  constructor(private userService: UsersService, private fb: FormBuilder, private router: Router ){

  }

  login() {
    this.userService.login(this.loginForm.value ).subscribe({
      next: ( data ) => {
        this.router.navigate(['dashboard'])
      }
    })
  }

}
