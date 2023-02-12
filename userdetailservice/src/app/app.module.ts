import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserService } from './Services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
