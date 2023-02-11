import { OnChanges } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() foo: string = 'procademy'

  constructor() {
    console.log('constructor called!');
    // console.log(this.foo);
  }

  //1 - gets also called if something changes
  ngOnChanges(changeValue: SimpleChanges) {
    console.log("ngOnChanges called!")
    // console.log(changeValue)
  }

  //2 - gets called only once
  ngOnInit() {
    console.log("ngOnInit called!")
    // console.log(this.foo)
  }

  //3 - gets also called if something changes
  ngDoCheck() {
    console.log("ngDoCheck called!")
    // console.log("ngDoCheck calls: ", this.foo)
  }

  //4 - gets called only once
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
    // console.log(this.foo)
  }

  //5 - gets also called if something changes
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
    // console.log("ngAfterContentChecked calls: ", this.foo)
  }

  //6 gets called only once
  ngAfterViewInit() {
    console.log("ngAfterViewInit called!")
    // console.log("ngAfterViewInit calls: ", this.foo)
  }

  //7 - gets also called if something changes
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
    // console.log("ngAfterViewChecked calls: ", this.foo)
  }

  //8 only gets called when the component gets destroyed
  ngOnDestroy() {
    console.log("ngOnDestroy called!")
  }

}
