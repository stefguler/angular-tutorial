import { FormsModule } from '@angular/forms';
import { EnrollService } from './Services/enroll.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JavascriptComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
