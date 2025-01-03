import { Component } from '@angular/core';
import { YearsSincePipe } from '../../pipes/years-since/years-since.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cv-page',
  imports: [
    YearsSincePipe,
    DatePipe,
  ],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.scss'
})
export class CvPageComponent {
  public readonly now = new Date();
}
