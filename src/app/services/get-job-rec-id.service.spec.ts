import { TestBed, inject } from '@angular/core/testing';

import { GetJobRecIdService } from './get-job-rec-id.service';

describe('GetJobRecIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJobRecIdService]
    });
  });

  it('should be created', inject([GetJobRecIdService], (service: GetJobRecIdService) => {
    expect(service).toBeTruthy();
  }));
});
