import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill[skill]',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input()
  skill!: Skill;

  constructor() { }

  ngOnInit(): void {
  }

  calculateExperiance(since: Date): string|number {
    const now = new Date();
    let years = now.getFullYear()  - since.getFullYear();
    if(years > 10)
      return `10+`
    return years;
  }
}

export interface Skill {
  title: string;
  since: Date;
  competence: number; // out of 5
  enthusiasm: number; // out of 5
}
