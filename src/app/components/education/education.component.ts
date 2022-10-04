import { Component, Input } from '@angular/core';
import { Course } from './course/course.component';

@Component({
  selector: 'app-education[courses]',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  @Input()
  courses!: Course[];
}