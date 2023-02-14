import { CandeactivateGuardService } from './Services/candeactivate-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router'; -> moved it out to other file 'app-routing.module.ts'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CoursesService } from './Services/courses.service';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app-routing.module';
import { CourseGuardService } from './Services/course-guard.service';
import { AuthService } from './Services/auth.service';
import { LoginComponent } from './login/login.component';
import { CourseResolveService } from './Services/course-resolve.service';

// -> moved this appRoute to an external file 'app-routing.module.ts
// const appRoute: Routes = [
//   // {path: '**', component: ErrorComponent}, //This wildcard route always has to be at the end, the last one route!
//   {path: '', component: HomeComponent}, //default route , option 1 -> no redirection happening
//   // {path:'', redirectTo: 'Home', pathMatch: 'full'}, // default route, option 2, parthMatch simply tells the router how to route -> redirection to homepage
//   {path: 'Home', component: HomeComponent},
//   {path: 'About', component: AboutComponent},
//   {path: 'Contact', component: ContactComponent},
//   {path: 'Courses', component: CoursesComponent},
//   // {path: 'Courses/Course/:id', component: CourseComponent}, //:id -> will be the course ID that can be snapshotted to retrieve the ID again inside the component
//   {path: 'Courses', children: [ // Child routes or Nested Routes
//     {path: 'Course/:id', component: CourseComponent },
//     {path: 'Course/:name', component: CourseComponent } //multiple child routes for a given parent route
//   ]}, 
//   {path: '**', component: ErrorComponent}, //This wildcard route always has to be at the end, the last one route! otherwise it will ALWAYS be called
// ]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    HomeComponent, 
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoute), // moved it out
    FormsModule,
    AppRoutingModule //imported from the outsourced app-routing.module.ts file
  ],
  providers: [
    CoursesService, 
    CourseGuardService,
    AuthService,
    CandeactivateGuardService,
    CourseResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
