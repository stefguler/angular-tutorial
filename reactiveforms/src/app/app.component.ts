import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveforms';
  reactiveForm: FormGroup;
  formStatus;


  ngOnInit() {
    this.reactiveForm = new FormGroup({

      //FormGroup method
      personalDetails: new FormGroup({
        firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        email: new FormControl(null, [Validators.required, Validators.email], this.emailNotAllowed),
      }),

      gender: new FormControl('male'),
      country: new FormControl('usa'),
      hobbies: new FormControl(null),

      //FormArray method
      skills: new FormArray([
        new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required)
      ])
    })

    //on change event check on specific field
    // this.reactiveForm.get('personalDetails.firstname').valueChanges.subscribe((val)  => {
    //   console.log(val)
    // })

    //on change event check inside a formGroup
    // this.reactiveForm.valueChanges.subscribe((val) => {
    //   console.log(val)
    // })

    //check 
    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value)
      this.formStatus = value;
    })

    //set values
    // setTimeout(() => {
    //   this.reactiveForm.setValue({
    //     personalDetails: {
    //       firstname: 'Stef',
    //       lastname: 'Guler',
    //       email: 'abc@email.com'
    //     },
    //     gender: '',
    //     country: '',
    //     hobbies: '',
    //     skills: ['st']
    //   });

    // }, 4000)

        //patch values
        setTimeout(() => {
          this.reactiveForm.patchValue({
            personalDetails: {
              email: 'abc@email.com'
            }
          });
    
        }, 4000)
  }

  onSubmit() {
    console.log(this.reactiveForm)
    //reseting with keeping some of the values -> add the values in an object.
    this.reactiveForm.reset({
        personalDetails: {
          firstname: '',
          lastname: '',
          email: ''
        },
        gender: 'male',
        country: 'usa',
        hobbies: '',
        skills: []
      });
  }

  addSkills() {

    //typecasting to make a push work (get method can return "any" --> we need to cast the expression into a FormArray by (<FormArray>Expression).push(blabla))
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }


  //create own / custom validator
  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }
    return null;
  }

  //create own / custom async validator 
  emailNotAllowed(control: FormControl): Promise<any> | Observable<any> {
    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'procademy@gmail.com') {
          resolve({ emailNotAllowed: true })
        } else {
          resolve(null)
        }
      }, 2000)
    });
    return response;
  }

}
