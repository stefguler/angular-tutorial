import { filter } from 'rxjs/operators';
import { StudentsService } from './Services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes';
  students: Student[];
  totalMarks: number;
  _filterText: string;
  filteredStudents: Student[];
  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length)
    }, 2000)
  })

  constructor(private studentService: StudentsService) { }

  get filterText(){
    return this._filterText
  }

  set filterText(value: string){
    this._filterText = value;
    this.filteredStudents = this.filterStudentByGender(value)
  }

  ngOnInit() {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.filteredStudents = this.students;
  }

  AddDummyStudent() {
    //pure pipe
    // let studentCopy = Object.assign([], this.students)
    // studentCopy.push({ name: 'Dummy', course: 'MSc', marks: 520, DOB: new Date(), gender: 'female' })
    // this.students = studentCopy

    this.students.push({ name: 'Dummy', course: 'MSc', marks: 520, DOB: new Date(), gender: 'female' })
    this.filteredStudents = this.filterStudentByGender(this._filterText)
   
  }

  ChangeGender() {
  //pure pipe
    let studentCopy = Object.assign([], this.students)

    if (studentCopy[0].gender === 'female') {
      studentCopy[0].gender = 'male'
    } else {
      studentCopy[0].gender = 'female'
    }
    this.students = studentCopy
  
  // this.students[0].gender = 'female'
  this.filteredStudents = this.filterStudentByGender(this._filterText)
  }

  onMouseMove() {}

  filterStudentByGender(filterTerm: string) {
    if(this.students.length === 0 || this.filterText === '' || this.filterText === undefined) {
      console.log('filterpipe called')
      return this.students;
    } else {
      return this.students.filter((student) =>
       {
         return student.gender.toLowerCase() === filterTerm.toLowerCase()
       })
    } 
  }


  }

