import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PercentagePipe } from './Pipes/percentage.pipe';
import { StudentsService } from './Services/students.service';
import { FilterPipe } from './Pipes/filter.pipe';
// import { Student } from './students';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [StudentsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
