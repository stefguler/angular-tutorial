import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  firstname;
  lastname;
  email;
  country;
  defaultGender = 'Other';
  defaultCountry; // 'switzerland'
  gender = [
    { id: '1', value: 'Male' },
    { id: '1', value: 'Female' },
    { id: '1', value: 'Other' }
  ]

  @ViewChild('myForm') form: NgForm;

  setDefaultValues() {
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'Smith';
    // this.form.value.personDetails.email = 'j.smith@example.com';
    //SETVALUE
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    //PATCHVALUE -- just patch some of them, not all to not overwrite other properties in a form!
    this.form.form.patchValue({
      personDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'abc@example.com'
      }
    })

  }

  onSubmit() {
    console.log(this.form)
  }
}
