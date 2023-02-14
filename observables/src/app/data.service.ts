import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // dataEmitter = new EventEmitter<string>();

  // raiseDataEmitterEvent(data: string) {
  //   this.dataEmitter.emit(data);
  // }


  // with Subject function from rxjs
  dataEmitter = new Subject<string>();

  raiseDataEmitterEvent(data: string) {
    this.dataEmitter.next(data);
  }

}
