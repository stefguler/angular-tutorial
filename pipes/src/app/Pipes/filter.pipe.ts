import { Student } from '../students';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStudent',
  //always use pure pipes!! its best practise
  pure: true,
})
export class FilterPipe implements PipeTransform {

  transform(students: Student[], filterText: string) {
    if(students.length === 0 || filterText === '' || filterText === undefined) {
      console.log('filterpipe called')
      return students;
    } else {
      return students.filter((student) =>
       {
         return student.gender.toLowerCase() === filterText.toLowerCase()
       })
    } 
  }
}
