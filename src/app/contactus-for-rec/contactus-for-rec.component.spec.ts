import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusForRecComponent } from './contactus-for-rec.component';

describe('ContactusForRecComponent', () => {
  let component: ContactusForRecComponent;
  let fixture: ComponentFixture<ContactusForRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusForRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusForRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
