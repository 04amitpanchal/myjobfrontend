import { TestBed, inject } from '@angular/core/testing';

import { UpdateRecPasswordService } from './update-rec-password.service';

describe('UpdateRecPasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateRecPasswordService]
    });
  });

  it('should be created', inject([UpdateRecPasswordService], (service: UpdateRecPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
