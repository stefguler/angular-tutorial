import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit {

constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

ngOnInit() {
 
}

GoToHome() {
  this.route.navigate(['Home'], {relativeTo: this.activatedRoute}); // If you want to use the relative path, you have to import activatedRoute and add the relativeTo from it
  // this.route.navigateByUrl('Home'), {relativeTo: this.activatedRoute};
}


}
