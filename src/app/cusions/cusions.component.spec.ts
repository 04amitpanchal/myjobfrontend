import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusionsComponent } from './cusions.component';

describe('CusionsComponent', () => {
  let component: CusionsComponent;
  let fixture: ComponentFixture<CusionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
