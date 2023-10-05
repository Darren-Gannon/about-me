import { Component } from '@angular/core';
import { differenceInYears } from 'date-fns';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent {

  calculateExperiance(since: Date | string | number): string | number {
    const _since = new Date(since);
    const now = new Date();
    const years = differenceInYears(now, _since);
    if(years > 10)
      return `10+`
    return years;
  }
}