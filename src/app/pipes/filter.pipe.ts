import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/Course';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Course[], title: string): any {
    if (title === '') return items;
    return items.filter((item) => item.title.toLowerCase().includes(title));
  }
}
