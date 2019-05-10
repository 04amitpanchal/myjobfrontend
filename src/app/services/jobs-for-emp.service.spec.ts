import { TestBed, inject } from '@angular/core/testing';

import { JobsForEmpService } from './jobs-for-emp.service';

describe('JobsForEmpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobsForEmpService]
    });
  });

  it('should be created', inject([JobsForEmpService], (service: JobsForEmpService) => {
    expect(service).toBeTruthy();
  }));
});
