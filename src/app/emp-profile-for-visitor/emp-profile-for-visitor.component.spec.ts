import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProfileForVisitorComponent } from './emp-profile-for-visitor.component';

describe('EmpProfileForVisitorComponent', () => {
  let component: EmpProfileForVisitorComponent;
  let fixture: ComponentFixture<EmpProfileForVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpProfileForVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpProfileForVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
