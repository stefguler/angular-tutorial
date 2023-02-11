import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {


   }
   
   @Input() set appClass(value: Object) {
    let entries = Object.entries(value)

    for(let [classname, condition] of entries) { //destructoring the object (instead of entry of entries that results in entry[0] and entry[1], you give it a name that you can use
      if(condition){
        this.renderer.addClass(this.element.nativeElement, classname)
      }
    }

   }

}
