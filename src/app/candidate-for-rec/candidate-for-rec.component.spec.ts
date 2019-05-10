import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateForRecComponent } from './candidate-for-rec.component';

describe('CandidateForRecComponent', () => {
  let component: CandidateForRecComponent;
  let fixture: ComponentFixture<CandidateForRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateForRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateForRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
