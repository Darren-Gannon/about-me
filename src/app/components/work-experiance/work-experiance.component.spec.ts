import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperianceComponent } from './work-experiance.component';

describe('WorkExperianceComponent', () => {
  let component: WorkExperianceComponent;
  let fixture: ComponentFixture<WorkExperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
