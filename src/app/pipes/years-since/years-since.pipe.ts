import { Pipe, PipeTransform } from '@angular/core';
import { differenceInYears } from 'date-fns';

@Pipe({
  name: 'yearsSince'
})
export class YearsSincePipe implements PipeTransform {

  transform(value: Date | string | number, now?: Date | string | number): number {
    const _since = new Date(value);
    const years = differenceInYears(new Date(now ?? new Date()), _since);
    return years;
  }

}
