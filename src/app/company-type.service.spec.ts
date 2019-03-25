import { TestBed, inject } from '@angular/core/testing';

import { CompanyTypeService } from './company-type.service';

describe('CompanyTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyTypeService]
    });
  });

  it('should be created', inject([CompanyTypeService], (service: CompanyTypeService) => {
    expect(service).toBeTruthy();
  }));
});
