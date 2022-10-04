import { Component, OnInit, Input } from '@angular/core';
import { Job } from './job/job.component';

@Component({
  selector: 'app-work-experiance[jobs]',
  templateUrl: './work-experiance.component.html',
  styleUrls: ['./work-experiance.component.scss']
})
export class WorkExperianceComponent implements OnInit {

  @Input()
  jobs!: Job[];

  constructor() { }

  ngOnInit(): void {
  }
}