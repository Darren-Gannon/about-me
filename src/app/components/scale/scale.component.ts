import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, map, combineLatest } from 'rxjs';

@Component({
  selector: 'app-scale[value][max]',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {

  private readonly max_ = new BehaviorSubject<number>(0);
  public readonly max$ = this.max_.asObservable();

  @Input()
  public max!: number | string;
  
  @Input()
  public value!: number | string;

  private readonly value_ = new BehaviorSubject<number>(0);
  public readonly value$ = this.value_.asObservable();
  public readonly values$ = combineLatest([
    this.max$,
    this.value$,
  ]).pipe(
    map(([max, value]) => new Array(max).fill(0).map((val, index) => index < value))
  );
  
  public values!: boolean[];
  
  @Input()
  public label?: string;

  ngOnInit(): void {
    this.max_.next(+this.max);
    this.value_.next(+this.value);
  }

  numCols(max: number) {
    return `repeat(${max},  1fr)`;
  }
}