import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        console.error('Login failed:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        console.error('Error URL:', error.url);
        // You can also display the error message to the user
        alert(`Login failed: ${error.message}`);      }
    );
  }
}
