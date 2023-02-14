import { CoursesService } from 'src/app/Services/courses.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseResolveService implements Resolve<any> {

  constructor(private coursesService: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.coursesService.getAllCourses().then((data) => {
      return data;
    }) 
    
  }

}
