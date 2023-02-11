import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  };

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink'; //using alias, name of the selecter of this directive
  @Input() title: string = 'This is title';

  @HostBinding('style.background') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit() {
    this.background = this.defaultColor;
    this.renderer.addClass(this.element.nativeElement, 'container')
  }

  @HostListener('mouseenter') onmouseover() {
    this.background = this.highlightColor
    this.border = 'red 2px solid'
   }

   @HostListener('mouseleave') onmouseout() {
    this.background = this.defaultColor
    this.border = 'none'
   }

}
