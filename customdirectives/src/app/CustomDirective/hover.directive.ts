import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  //private hostlistener: HostListener
  constructor(private element: ElementRef, private renderer: Renderer2,
     ) {

   }

  //  @HostListener('mouseenter') onmouseover(){
  //   this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
  //   this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
  //   this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  // }

   @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '2rem 2rem');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '1rem 1rem');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
    this.renderer.setStyle(this.element.nativeElement, 'rotate', '0.5s');
   }

   @HostListener('mouseleave') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'rotate', '0.5s');
   }

}
