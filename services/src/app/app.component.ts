import { UserService } from './Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'services';

  users: {name: string, status: string}[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.users = this.userService.users;
    console.log("users from users: ", this.users)

  }

}

