import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService: CoursesService, private route: ActivatedRoute) {

  }

  courses = [];

  ngOnInit(): void {
    // // this.courses = this.courseService.courses;
    // this.courseService.getAllCourses().then((data) => {
    //   this.courses = data;
    // })
    this.courses = this.route.snapshot.data['courses'] // the property name is defined in "resolve" in the routing module in the specific route where the resolver was set
  }

}
