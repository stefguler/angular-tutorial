import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor(private service: CoursesService, private activeRoute: ActivatedRoute, 
    private router: Router) { }

  course;
  courseId;
  RouteParamObs;
  editMode: boolean = false;

  ngOnInit(): void {
    // this.courseId = this.activeRoute.snapshot.params['id']; // or  his.courseId = this.route.snapshot.paramMap.get('id'); -> ParamMap is the new way to do it and better way
    //this.courseId = this.activeRoute.snapshot.params['name'];
    // this.courseId = this.activeRoute.snapshot.paramMap.get('id'); // ParamMap is the new way to do it and better way
    // this.course = this.service.courses.find(x => x.id == this.courseId);
    
    
    this.RouteParamObs = this.activeRoute.paramMap.subscribe((param) => {  // use observable to retrieve the ID, because once the ngOnInit has instantiated the activeRoute, it will not do so again and you will have the same id all the time
      this.courseId = param.get('id')
      this.course = this.service.courses.find(x => x.id == this.courseId)
    });

      // //getting QueryParameter by snapshot -> this property is not good enough, due to its only initiated on INIT and won't never change!
      // this.editMode = Boolean(this.activeRoute.snapshot.queryParamMap.get('eidt'));

      //use Observable

      this.activeRoute.queryParamMap.subscribe((param) => {
        this.editMode = Boolean(param.get('edit'));
      })
      console.log(this.editMode)
  }




  ngOnDestroy() {
    this.RouteParamObs.unsubscribe(); // its good practise to unsubscribe from an Observer, althought Angular unsubscribes automatically for you.
  }

  appendQueryParam() {
    this.router.navigate(['/Courses/Course', this.courseId], {queryParams: {edit: true}})
  }

}
