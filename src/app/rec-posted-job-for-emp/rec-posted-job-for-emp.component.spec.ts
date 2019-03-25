import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPostedJobForEmpComponent } from './rec-posted-job-for-emp.component';

describe('RecPostedJobForEmpComponent', () => {
  let component: RecPostedJobForEmpComponent;
  let fixture: ComponentFixture<RecPostedJobForEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecPostedJobForEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecPostedJobForEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
