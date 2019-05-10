import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCandidatesForRecComponent } from './related-candidates-for-rec.component';

describe('RelatedCandidatesForRecComponent', () => {
  let component: RelatedCandidatesForRecComponent;
  let fixture: ComponentFixture<RelatedCandidatesForRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedCandidatesForRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedCandidatesForRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
