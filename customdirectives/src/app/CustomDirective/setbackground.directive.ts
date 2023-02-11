import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[setBackground]'
})

export class setBackgroundDirective implements OnInit  {

  // private element: ElementRef; --> if you use private keyword in the constructor variable, you don't have to declare the variable first

  constructor(private element: ElementRef) {
    this.element = element;
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#C8E6C9'
  }

}