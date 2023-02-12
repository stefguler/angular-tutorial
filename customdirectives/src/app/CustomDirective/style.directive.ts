import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

@Input() set appStyle(styles: Object) {
  let entries = Object.entries(styles) // Object.entries does loop over an object :>
  console.log(entries)

  for(let [property, value] of entries) {
    this.renderer.setStyle(this.element.nativeElement, property, value)

  }

}


}




