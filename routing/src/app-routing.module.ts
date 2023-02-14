import { LoginComponent } from './app/login/login.component';
import { Routes, RouterModule } from '@angular/router';
//doing the routes in an external file

import { NgModule } from "@angular/core";
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { CoursesComponent } from './app/courses/courses.component';
import { CourseComponent } from './app/courses/course/course.component';
import { ErrorComponent } from './app/error/error.component';
import { CourseGuardService } from './app/Services/course-guard.service';
import { CandeactivateGuardService } from './app/Services/candeactivate-guard.service';
import { CourseResolveService } from './app/Services/course-resolve.service';

const appRoute: Routes = [
  // {path: '**', component: ErrorComponent}, //This wildcard route always has to be at the end, the last one route!
  { path: '', component: HomeComponent }, //default route , option 1 -> no redirection happening
  // {path:'', redirectTo: 'Home', pathMatch: 'full'}, // default route, option 2, parthMatch simply tells the router how to route -> redirection to homepage
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', canDeactivate: [CandeactivateGuardService], component: ContactComponent }, // can Deactivate Service, hidnering you from navigating somewhere
  { path: 'Login', component: LoginComponent },
  // {path: 'Courses', component: CoursesComponent, canActivate: [CourseGuardService]}, // canActivate is for Routing Guards, it allowes routing based on authorization
  { path: 'Courses', component: CoursesComponent, resolve: {courses: CourseResolveService} },
  // {path: 'Courses/Course/:id', component: CourseComponent}, //:id -> will be the course ID that can be snapshotted to retrieve the ID again inside the component
  {
    path: 'Courses', canActivateChild: [CourseGuardService], children: [ // Child routes or Nested Routes
      { path: 'Course/:id', component: CourseComponent }, // -> can also add it to a child directly: // canActivate: [CourseGuardService] //it depends on which route you do the guard service to hinder you open it
      // {path: 'Course/:id', canActivate: [CourseGuardService], [ component: CourseComponent },
      // {path: 'Course/:name', component: CourseComponent } //multiple child routes for a given parent route
    ]
  },
  { path: '**', component: ErrorComponent }, //This wildcard route always has to be at the end, the last one route! otherwise it will ALWAYS be called
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {



}
