import { TestBed, inject } from '@angular/core/testing';

import { GetcvService } from './getcv.service';

describe('GetcvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcvService]
    });
  });

  it('should be created', inject([GetcvService], (service: GetcvService) => {
    expect(service).toBeTruthy();
  }));
});
