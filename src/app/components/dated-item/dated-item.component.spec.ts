import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedItemComponent } from './dated-item.component';

describe('DatedItemComponent', () => {
  let component: DatedItemComponent;
  let fixture: ComponentFixture<DatedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
