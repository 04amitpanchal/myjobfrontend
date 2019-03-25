import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNotificationComponent } from './emp-notification.component';

describe('EmpNotificationComponent', () => {
  let component: EmpNotificationComponent;
  let fixture: ComponentFixture<EmpNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
