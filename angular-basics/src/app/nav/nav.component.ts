import { Component } from '@angular/core';

@Component({
  //html tag
  selector: 'app-nav',
  //html class:
  //selector: '.app-nav',
  //html attribute:
  //selector: '[app-nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  sitename: string = 'eShopping'

}
 