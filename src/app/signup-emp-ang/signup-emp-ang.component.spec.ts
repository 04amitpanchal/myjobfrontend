import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEmpAngComponent } from './signup-emp-ang.component';

describe('SignupEmpAngComponent', () => {
  let component: SignupEmpAngComponent;
  let fixture: ComponentFixture<SignupEmpAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupEmpAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupEmpAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
