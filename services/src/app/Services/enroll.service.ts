import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  OnEnrollClicked(title: string) {
    alert('Thank your fo enrolling to ' +title+ ' course')
  }

}
