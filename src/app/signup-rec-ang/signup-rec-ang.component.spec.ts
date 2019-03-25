import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRecAngComponent } from './signup-rec-ang.component';

describe('SignupRecAngComponent', () => {
  let component: SignupRecAngComponent;
  let fixture: ComponentFixture<SignupRecAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRecAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRecAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
