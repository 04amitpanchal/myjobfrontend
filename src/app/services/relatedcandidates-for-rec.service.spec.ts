import { TestBed, inject } from '@angular/core/testing';

import { RelatedcandidatesForRecService } from './relatedcandidates-for-rec.service';

describe('RelatedcandidatesForRecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelatedcandidatesForRecService]
    });
  });

  it('should be created', inject([RelatedcandidatesForRecService], (service: RelatedcandidatesForRecService) => {
    expect(service).toBeTruthy();
  }));
});
