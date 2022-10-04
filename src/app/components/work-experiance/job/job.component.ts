import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job[job]',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {

  @Input()
  job!: Job

  formatEndDate(end: Date): string | number {
    const now = new Date();
    const hourInMs: number = 3600000; 
    if(end.getTime() + hourInMs > now.getTime())
      return 'present';
    return end.getFullYear()
  }
}

export interface Job {
  title: string;
  company: string;
  start: Date;
  end: Date;
  description: string;
  reasonForLeaving: string;
}
