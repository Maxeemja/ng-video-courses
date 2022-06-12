import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    if (hours === 0) return minutes + ' min';
    return hours + 'h ' + minutes + ' min';
  }

}
