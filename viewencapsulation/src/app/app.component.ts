import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None, (if you don't use any, by default "ViewEncapsulation.Emulated" is used)
})
export class AppComponent {
  title = 'viewencapsulation';
}
