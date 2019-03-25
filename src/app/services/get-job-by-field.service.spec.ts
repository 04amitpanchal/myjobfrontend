import { TestBed, inject } from '@angular/core/testing';

import { GetJobByFieldService } from './get-job-by-field.service';

describe('GetJobByFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJobByFieldService]
    });
  });

  it('should be created', inject([GetJobByFieldService], (service: GetJobByFieldService) => {
    expect(service).toBeTruthy();
  }));
});
