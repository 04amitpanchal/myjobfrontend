import { TestBed, inject } from '@angular/core/testing';

import { GetAllRecruiterService } from './get-all-recruiter.service';

describe('GetAllRecruiterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllRecruiterService]
    });
  });

  it('should be created', inject([GetAllRecruiterService], (service: GetAllRecruiterService) => {
    expect(service).toBeTruthy();
  }));
});
