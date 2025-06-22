import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  formSubmitted = false;

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private authService: AuthserviceService,
    private router: Router
  ) { }

  onSubmit() {
    this.formSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          alert('Invalid credentials');
        }
      },
      error => {
        console.error('Login error:', error);
        alert('Login failed');
      }
    );
  }
}