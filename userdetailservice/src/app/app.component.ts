import { UserService } from './Services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userdetailservice';

  constructor(private userService: UserService) {

  }
}
