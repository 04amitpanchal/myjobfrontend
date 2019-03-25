import { TestBed, inject } from '@angular/core/testing';

import { GetEmpByidService } from './get-emp-byid.service';

describe('GetEmpByidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEmpByidService]
    });
  });

  it('should be created', inject([GetEmpByidService], (service: GetEmpByidService) => {
    expect(service).toBeTruthy();
  }));
});
