import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRecComponent } from './header-rec.component';

describe('HeaderRecComponent', () => {
  let component: HeaderRecComponent;
  let fixture: ComponentFixture<HeaderRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
