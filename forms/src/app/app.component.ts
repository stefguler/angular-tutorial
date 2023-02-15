import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  firstname:string;
  lastname:string;
  email: string;
  gen:string;
  country: string;

  defaultGender = 'Male';

  defaultCountry = 'india';

  gender = [
    { id: '1', value: 'Male' },
    { id: '1', value: 'Female' },
    { id: '1', value: 'Other' }
  ]

  @ViewChild('myForm') form: NgForm;

  setDefaultValues() {


    //vanilla, no form.'form.
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
    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.country = this.form.value.country;
    this.gen = this.form.value.gender;

    //resets all the form inputs and data, very helpful!
    this.form.reset();
  }
}
