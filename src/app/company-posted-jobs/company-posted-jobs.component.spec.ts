import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPostedJobsComponent } from './company-posted-jobs.component';

describe('CompanyPostedJobsComponent', () => {
  let component: CompanyPostedJobsComponent;
  let fixture: ComponentFixture<CompanyPostedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPostedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
