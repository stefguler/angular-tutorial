import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  slogan: string = "Your one stop shop for everything.";
  source: string = '/assets/shopping.jpg'

  getSlogan() {
    return "this is a new slogan for our web application."
  }



}
