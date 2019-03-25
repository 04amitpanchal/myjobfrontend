import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordRecComponent } from './change-password-rec.component';

describe('ChangePasswordRecComponent', () => {
  let component: ChangePasswordRecComponent;
  let fixture: ComponentFixture<ChangePasswordRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
