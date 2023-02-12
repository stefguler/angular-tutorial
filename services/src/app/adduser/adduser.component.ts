import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  username: string = '';
  status: string = 'active';
  users: {name: string, status: string}[];

  constructor(private userService: UserService) {
    this.users = userService.users;
  }

  ngOnInit() {

  }

  AddUser() {
    this.userService.AddNewUser(this.username, this.status)
  }

  // RemoveUser() {
  //   this.userService.RemoveUser(this.username)
  // }


}
