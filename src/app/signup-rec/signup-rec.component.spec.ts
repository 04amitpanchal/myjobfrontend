import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRecComponent } from './signup-rec.component';

describe('SignupRecComponent', () => {
  let component: SignupRecComponent;
  let fixture: ComponentFixture<SignupRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
