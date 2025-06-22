
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  formSubmitted = false;

  @ViewChild('registrationForm') registrationForm!: NgForm;
  constructor(
    private authService: AuthserviceService,
    private router: Router
  ) { }

  onSubmit() {
    this.formSubmitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    this.authService.Register(this.username, this.password).subscribe(
      success => {
        if (success) {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        } else {
          alert('Registration failed');
        }
      },
      error => {
        console.error('Registration error:', error);
        alert('Registration failed');
      }
    );
  }
}