import { TestBed, inject } from '@angular/core/testing';

import { LoginEmpService } from './login-emp.service';

describe('LoginEmpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginEmpService]
    });
  });

  it('should be created', inject([LoginEmpService], (service: LoginEmpService) => {
    expect(service).toBeTruthy();
  }));
});
