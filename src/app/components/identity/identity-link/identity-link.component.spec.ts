import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityLinkComponent } from './identity-link.component';

describe('IdentityLinkComponent', () => {
  let component: IdentityLinkComponent;
  let fixture: ComponentFixture<IdentityLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
