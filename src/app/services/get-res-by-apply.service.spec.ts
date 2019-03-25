import { TestBed, inject } from '@angular/core/testing';

import { GetResByApplyService } from './get-res-by-apply.service';

describe('GetResByApplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetResByApplyService]
    });
  });

  it('should be created', inject([GetResByApplyService], (service: GetResByApplyService) => {
    expect(service).toBeTruthy();
  }));
});
