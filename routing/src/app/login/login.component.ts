import { AuthService } from './../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  LogIn() {
    alert('Congratulations! You have been logged in.')
    this.authService.login();
  }

  LogOut() {
    alert('Sad to yee you go! You have been logged out.')
    this.authService.logout();

  }

}
