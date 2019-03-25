import { TestBed, inject } from '@angular/core/testing';

import { GetcandidatesService } from './getcandidates.service';

describe('GetcandidatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcandidatesService]
    });
  });

  it('should be created', inject([GetcandidatesService], (service: GetcandidatesService) => {
    expect(service).toBeTruthy();
  }));
});
