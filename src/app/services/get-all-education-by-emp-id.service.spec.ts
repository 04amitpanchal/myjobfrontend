import { TestBed, inject } from '@angular/core/testing';

import { GetAllEducationByEmpIdService } from './get-all-education-by-emp-id.service';

describe('GetAllEducationByEmpIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllEducationByEmpIdService]
    });
  });

  it('should be created', inject([GetAllEducationByEmpIdService], (service: GetAllEducationByEmpIdService) => {
    expect(service).toBeTruthy();
  }));
});
