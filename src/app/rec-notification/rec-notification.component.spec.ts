import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecNotificationComponent } from './rec-notification.component';

describe('RecNotificationComponent', () => {
  let component: RecNotificationComponent;
  let fixture: ComponentFixture<RecNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
