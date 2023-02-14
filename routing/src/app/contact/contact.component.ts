import { Component } from '@angular/core';
import { IDeactivateComponent } from '../Services/candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent {

  firstName;
  lastName;
  country;
  subject;

  ProcessForm() {

  }

  canExit() {
    if (this.firstName || this.lastName || this.country || this.subject) {
      return confirm('You have unsaved changes. Do you really want to discard these changes?')
    }
    return true;
  }

}
