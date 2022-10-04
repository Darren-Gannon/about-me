import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale[value][max]',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {
  @Input()
  max!: number;
  
  @Input()
  value!: number;
  
  values!: boolean[];
  
  @Input()
  label?: string;

  ngOnInit(): void {
    this.values = new Array(this.max).fill(0).map((val, index) => index < this.value);
  }

  numCols() {
    return `repeat(${this.max},  1fr)`;
  }
}