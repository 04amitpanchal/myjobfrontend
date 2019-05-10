import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusForEmpComponent } from './contactus-for-emp.component';

describe('ContactusForEmpComponent', () => {
  let component: ContactusForEmpComponent;
  let fixture: ComponentFixture<ContactusForEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusForEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusForEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
