import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/Course';
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<Course>): Array<Course> {
    array.sort((a: Course, b: Course) => {
      if (a.creationDate > b.creationDate) {
        return -1;
      } else if (a.creationDate < b.creationDate) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
