import { TestBed, inject } from '@angular/core/testing';

import { CusionsService } from './cusions.service';

describe('CusionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CusionsService]
    });
  });

  it('should be created', inject([CusionsService], (service: CusionsService) => {
    expect(service).toBeTruthy();
  }));
});
