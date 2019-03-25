import { TestBed, inject } from '@angular/core/testing';

import { GetjobbyidService } from './getjobbyid.service';

describe('GetjobbyidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetjobbyidService]
    });
  });

  it('should be created', inject([GetjobbyidService], (service: GetjobbyidService) => {
    expect(service).toBeTruthy();
  }));
});
