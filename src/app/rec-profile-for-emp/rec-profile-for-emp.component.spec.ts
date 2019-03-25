import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecProfileForEmpComponent } from './rec-profile-for-emp.component';

describe('RecProfileForEmpComponent', () => {
  let component: RecProfileForEmpComponent;
  let fixture: ComponentFixture<RecProfileForEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecProfileForEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecProfileForEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
