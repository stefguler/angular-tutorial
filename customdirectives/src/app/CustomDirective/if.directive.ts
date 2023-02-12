import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  //1. what to remove
  //2. from where to remove
  constructor(private tempalte: TemplateRef<any>, private viewContainer: ViewContainerRef) { } //template parameter stores the view iteself, viewContainer Container in which we will add or remove the view || WHAT to remove, FROM WHERE to remove!

  @Input() set appIf(condition: boolean) {
    if(condition) {
      this.viewContainer.createEmbeddedView(this.tempalte)
    } else {
      this.viewContainer.clear();
    }


  }

}
