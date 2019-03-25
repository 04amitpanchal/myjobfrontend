import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFieldWiseCompanyComponent } from './emp-field-wise-company.component';

describe('EmpFieldWiseCompanyComponent', () => {
  let component: EmpFieldWiseCompanyComponent;
  let fixture: ComponentFixture<EmpFieldWiseCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpFieldWiseCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFieldWiseCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
