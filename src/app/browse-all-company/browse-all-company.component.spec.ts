import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllCompanyComponent } from './browse-all-company.component';

describe('BrowseAllCompanyComponent', () => {
  let component: BrowseAllCompanyComponent;
  let fixture: ComponentFixture<BrowseAllCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseAllCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseAllCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
