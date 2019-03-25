import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileRecComponent } from './edit-profile-rec.component';

describe('EditProfileRecComponent', () => {
  let component: EditProfileRecComponent;
  let fixture: ComponentFixture<EditProfileRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
