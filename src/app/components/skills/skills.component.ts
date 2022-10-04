import { Component, OnInit, Input } from '@angular/core';
import { Skill } from './skill/skill.component';

@Component({
  selector: 'app-skills[skills]',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input()
  skills!: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}