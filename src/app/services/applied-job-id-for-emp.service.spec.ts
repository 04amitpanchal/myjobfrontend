import { TestBed, inject } from '@angular/core/testing';

import { AppliedJobIdForEmpService } from './applied-job-id-for-emp.service';

describe('AppliedJobIdForEmpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppliedJobIdForEmpService]
    });
  });

  it('should be created', inject([AppliedJobIdForEmpService], (service: AppliedJobIdForEmpService) => {
    expect(service).toBeTruthy();
  }));
});
