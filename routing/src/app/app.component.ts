import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';
  
  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    // //Fragments
    // this.activatedRoute.fragment.subscribe((val) => {
    //   this.jumpTo(val)
    // })

  }

  
  //fragments
  // jumpTo(section) {
  //   document.getElementById(section).scrollIntoView({behavior: 'smooth'})
  // }
}
