import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForVisitorComponent } from './header-for-visitor.component';

describe('HeaderForVisitorComponent', () => {
  let component: HeaderForVisitorComponent;
  let fixture: ComponentFixture<HeaderForVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
