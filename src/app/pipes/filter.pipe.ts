import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], title: string): any {
    if(title === '') return items;
    return items.filter((item) => item.title.toLowerCase().includes(title));
  }
}
