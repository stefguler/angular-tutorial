import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';
  displayLoadingIndicator = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // //Fragments
    // this.activatedRoute.fragment.subscribe((val) => {
    //   this.jumpTo(val)
    // })

    //navigation events
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }

      //always implement NavigationEnd, Cancel and Error to avoid other issues
      if (routerEvent instanceof NavigationEnd || 
        routerEvent instanceof NavigationCancel || 
        routerEvent instanceof NavigationError) {
        this.displayLoadingIndicator = false;
      }
    })
  }


  //fragments
  // jumpTo(section) {
  //   document.getElementById(section).scrollIntoView({behavior: 'smooth'})
  // }
}
