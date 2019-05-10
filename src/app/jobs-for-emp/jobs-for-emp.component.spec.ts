import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsForEmpComponent } from './jobs-for-emp.component';

describe('JobsForEmpComponent', () => {
  let component: JobsForEmpComponent;
  let fixture: ComponentFixture<JobsForEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsForEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsForEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
