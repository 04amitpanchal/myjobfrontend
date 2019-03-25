import { TestBed, inject } from '@angular/core/testing';

import { GetApplyIdByEmpAndJobService } from './get-apply-id-by-emp-and-job.service';

describe('GetApplyIdByEmpAndJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetApplyIdByEmpAndJobService]
    });
  });

  it('should be created', inject([GetApplyIdByEmpAndJobService], (service: GetApplyIdByEmpAndJobService) => {
    expect(service).toBeTruthy();
  }));
});
