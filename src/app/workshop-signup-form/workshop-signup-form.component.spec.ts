import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopSignupFormComponent } from './workshop-signup-form.component';

describe('WorkshopSignupFormComponent', () => {
  let component: WorkshopSignupFormComponent;
  let fixture: ComponentFixture<WorkshopSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
