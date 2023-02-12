import { EnrollService } from './../Services/enroll.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'], 
  // providers: [EnrollService]  // is needed for DI, but it can also be imported in the app.modules.ts files, inside the providers, so you don't have to import it in every component
})
export class JavascriptComponent {
  title='JavaScript'

  constructor(private enrollService: EnrollService) {} //<- this is a injection of a dependency from the service to the javascropt component ;)

OnEnroll() {
  // const enrollService = new EnrollService(); <-- Will be injected by Angular's Dependency Injection
  this.enrollService.OnEnrollClicked(this.title)
}

}
