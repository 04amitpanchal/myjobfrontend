import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecProfileForVisitorComponent } from './rec-profile-for-visitor.component';

describe('RecProfileForVisitorComponent', () => {
  let component: RecProfileForVisitorComponent;
  let fixture: ComponentFixture<RecProfileForVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecProfileForVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecProfileForVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
