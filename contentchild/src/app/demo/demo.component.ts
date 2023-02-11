import { Component, ContentChild, ElementRef, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DemoComponent implements OnInit, AfterContentInit {

  @ContentChild('paragraph') paragraphEl: ElementRef;

  ngOnInit() {
    console.log(this.paragraphEl)
  }

  ngAfterContentInit() {
    console.log(this.paragraphEl.nativeElement.textContent)
  }

}
