import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1headerComponent } from './app1header.component';

describe('App1headerComponent', () => {
  let component: App1headerComponent;
  let fixture: ComponentFixture<App1headerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1headerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
