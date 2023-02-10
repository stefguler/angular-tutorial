import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

searchValue: string = '';


//receiving data from an html input box
changesearchValue(input: Event) {
  this.searchValue = (<HTMLInputElement>input.target).value;
  console.log(this.searchValue)
}

}
