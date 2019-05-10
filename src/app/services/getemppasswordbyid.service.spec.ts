import { TestBed, inject } from '@angular/core/testing';

import { GetemppasswordbyidService } from './getemppasswordbyid.service';

describe('GetemppasswordbyidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetemppasswordbyidService]
    });
  });

  it('should be created', inject([GetemppasswordbyidService], (service: GetemppasswordbyidService) => {
    expect(service).toBeTruthy();
  }));
});
