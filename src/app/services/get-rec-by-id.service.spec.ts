import { TestBed, inject } from '@angular/core/testing';

import { GetRecByIdService } from './get-rec-by-id.service';

describe('GetRecByIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRecByIdService]
    });
  });

  it('should be created', inject([GetRecByIdService], (service: GetRecByIdService) => {
    expect(service).toBeTruthy();
  }));
});
