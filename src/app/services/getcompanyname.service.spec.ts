import { TestBed, inject } from '@angular/core/testing';

import { GetcompanynameService } from './getcompanyname.service';

describe('GetcompanynameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcompanynameService]
    });
  });

  it('should be created', inject([GetcompanynameService], (service: GetcompanynameService) => {
    expect(service).toBeTruthy();
  }));
});
