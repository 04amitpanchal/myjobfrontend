import { TestBed, inject } from '@angular/core/testing';

import { GetEmpFieldByEmpidService } from './get-emp-field-by-empid.service';

describe('GetEmpFieldByEmpidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEmpFieldByEmpidService]
    });
  });

  it('should be created', inject([GetEmpFieldByEmpidService], (service: GetEmpFieldByEmpidService) => {
    expect(service).toBeTruthy();
  }));
});
