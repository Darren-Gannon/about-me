import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course[course]',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  @Input()
  course!: Course;
}


export interface Course {
  title: string;
  school: string;
  description?: string;
  year: string;
}