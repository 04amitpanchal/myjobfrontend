import { TestBed, inject } from '@angular/core/testing';

import { AddCvService } from './add-cv.service';

describe('AddCvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCvService]
    });
  });

  it('should be created', inject([AddCvService], (service: AddCvService) => {
    expect(service).toBeTruthy();
  }));
});
