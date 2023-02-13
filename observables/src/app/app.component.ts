import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observables';

  constructor(private dataService: DataService) {
    
  }

  counterObservable = interval(1000);
  counterSub;

  ngOnInit(){
    this.counterSub =  this.counterObservable.subscribe((val) => {
      console.log(val);
    })
  }


  unsubscribe() {
    this.counterSub.unsubscribe();

  }

  subscribe() {
    this.counterSub =  this.counterObservable.subscribe((val) => {
      console.log(val);
    })
    
  }



  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts')
  //   setTimeout(() => { observer.next('1, observable 1') }, 1000)
  //   setTimeout(() => { observer.next('2, observable 1') }, 2000)
  //   setTimeout(() => { observer.next('3, observable 1') }, 3000)
  //   // setTimeout(() => { observer.error(new Error('Something went wrong! Please try again later'))}, 3000) // finishes the stream, even skips a later "complete"
  //   setTimeout(() => { observer.next('4, observable 1') }, 4000) // not emitted anymore due there was an error before 
  //   setTimeout(() => { observer.next('5, observable 1') }, 5000) // not emitted anymore due there was an error before
  //   // setTimeout(() => { observer.complete() }, 6000) // completes and finishes the observer
  //   // observer.next('1');
  //   // observer.next('2');
  //   // observer.next('3');
  //   // observer.next('4');
  //   // observer.next('5');
  // });

  // myObservable2 = Observable.create((observer) => {

  //   setTimeout(() => { observer.next('1, observable 2') }, 1000)
  //   setTimeout(() => { observer.next('2, observable 2') }, 2000)
  //   setTimeout(() => { observer.next('3, observable 2') }, 3000)
  //   setTimeout(() => { observer.next('4, observable 2') }, 4000)
  //   setTimeout(() => { observer.next('5, observable 2') }, 5000)
  // })

  // array1 = [1, 2, 3, 5, 6, 9]
  // array2 = ['A', 'C', 'D']

  // myObservable3 = of(this.array1, this.array2, 28, 98, 'hello', null, undefined, new Error()); //thros a complete at the end

  // myObservable4 = from(this.array1); //accepts only a single an argument , which should be an iterable, iterates over the argument and emits one by one value of the iterable

  // transformedObs = this.myObservable4.pipe(map((val) => {
  //   return val * 5;
  // }), filter((val) => {
  //   return val % 2 != 0;
  // }))

  // // transformedObs2 = this.myObservable4.pipe(filter((val) => {
  // //   return val % 2 != 0;
  // // }))


  // //chaining an observable!
  // myObservable5 = from(this.array1).pipe(map((val) => {
  //   return val * 5;
  // }), filter((val) => {
  //   return val % 2 != 0;
  // }))




  // ngOnInit() {
  //   // this.myObservable.subscribe((val) => { // parameters of subscribe are: "next", "error" and "complete": next-> takes the next the value
  //   //   console.log(val);
  //   // }, (error) => { // error parameter (callback, usually takes the new Error instanitated in the parameter)
  //   //   alert(error.message);
  //   // }, () => { // complete parameter (callback, takes no argument), finishes the stream!
  //   //   alert('task completed') 
  //   // });

  //   // this.myObservable2.subscribe((val) => { // parameters of subscribe are: "next", "error" and "complete": next-> takes the next the value
  //   //   console.log(val);
  //   // }, (error) => { // error parameter (callback, usually takes the new Error instanitated in the parameter)
  //   //   alert(error.message);
  //   // }, () => { // complete parameter (callback, takes no argument), finishes the stream!
  //   //   alert('task completed') 
  //   // });

  //   // this.myObservable3.subscribe((val) => { // parameters of subscribe are: "next", "error" and "complete": next-> takes the next the value
  //   //   console.log(val);
  //   // }, (error) => { // error parameter (callback, usually takes the new Error instanitated in the parameter)
  //   //   alert(error.message);
  //   // }, () => { // complete parameter (callback, takes no argument), finishes the stream!
  //   //   alert('task completed') 
  //   // });

  //   // this.myObservable4.subscribe((val) => { // parameters of subscribe are: "next", "error" and "complete": next-> takes the next the value
  //   //   console.log(val);
  //   // }, (error) => { // error parameter (callback, usually takes the new Error instanitated in the parameter)
  //   //   alert(error.message);
  //   // }, () => { // complete parameter (callback, takes no argument), finishes the stream!
  //   //   alert('task completed') 
  //   // });

  //   // this.transformedObs.subscribe((val) => { // parameters of subscribe are: "next", "error" and "complete": next-> takes the next the value
  //   //   console.log(val);
  //   // }, (error) => { // error parameter (callback, usually takes the new Error instanitated in the parameter)
  //   //   alert(error.message);
  //   // }, () => { // complete parameter (callback, takes no argument), finishes the stream!
  //   // //   alert('task completed') 
  //   // });

  //   // this.transformedObs.subscribe((val) => { // parameters of subscribe are: "next", "error" and "complete": next-> takes the next the value
  //   //   console.log(val);
  //   // }, (error) => { // error parameter (callback, usually takes the new Error instanitated in the parameter)
  //   //   alert(error.message);
  //   // }, () => { // complete parameter (callback, takes no argument), finishes the stream!
  //   //   alert('task completed')
  //   // });

  //   this.myObservable5.subscribe((val) => { // parameters of subscribe are: "next", "error" and "complete": next-> takes the next the value
  //     console.log(val);
  //   }, (error) => { // error parameter (callback, usually takes the new Error instanitated in the parameter)
  //     alert(error.message);
  //   }, () => { // complete parameter (callback, takes no argument), finishes the stream!
  //     alert('task completed')
  //   });
  // }

}


