import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopComponent } from './main-top.component';

describe('MainTopComponent', () => {
  let component: MainTopComponent;
  let fixture: ComponentFixture<MainTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
