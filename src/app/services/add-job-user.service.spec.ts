import { TestBed, inject } from '@angular/core/testing';

import { AddJobUserService } from './add-job-user.service';

describe('AddJobUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddJobUserService]
    });
  });

  it('should be created', inject([AddJobUserService], (service: AddJobUserService) => {
    expect(service).toBeTruthy();
  }));
});
