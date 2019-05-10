import { TestBed, inject } from '@angular/core/testing';

import { GetJobByIdForEmpService } from './get-job-by-id-for-emp.service';

describe('GetJobByIdForEmpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJobByIdForEmpService]
    });
  });

  it('should be created', inject([GetJobByIdForEmpService], (service: GetJobByIdForEmpService) => {
    expect(service).toBeTruthy();
  }));
});
