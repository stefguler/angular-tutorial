import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers: [EnrollService]  // is needed for DI, but it can also be imported in the app.modules.ts files, inside the providers, so you don't have to import it in every component
})

export class AngularComponent {
  title='Angular'

  constructor(private enrollService:EnrollService) {} //<- this is a injection of a dependency from the service to the angular component ;)

  OnEnroll() {
    // const enrollService = new EnrollService(); <-- Will be injected by Angular's Dependency Injection
    this.enrollService.OnEnrollClicked(this.title)
  }
  

}
