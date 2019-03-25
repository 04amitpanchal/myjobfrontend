import { TestBed, inject } from '@angular/core/testing';

import { GetEduidByEmpidService } from './get-eduid-by-empid.service';

describe('GetEduidByEmpidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEduidByEmpidService]
    });
  });

  it('should be created', inject([GetEduidByEmpidService], (service: GetEduidByEmpidService) => {
    expect(service).toBeTruthy();
  }));
});
