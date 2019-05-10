import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProfileRecComponent } from './emp-profile-rec.component';

describe('EmpProfileRecComponent', () => {
  let component: EmpProfileRecComponent;
  let fixture: ComponentFixture<EmpProfileRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpProfileRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpProfileRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
