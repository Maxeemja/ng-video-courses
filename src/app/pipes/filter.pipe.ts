import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/shared/Course.interface';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Course[], title: string): any {
    if (title === '') return items;
    return items.filter((item) => item.title.toLowerCase().includes(title));
  }
}
