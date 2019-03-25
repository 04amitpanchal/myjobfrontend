import { TestBed, inject } from '@angular/core/testing';

import { BrowseAllCompanyService } from './browse-all-company.service';

describe('BrowseAllCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowseAllCompanyService]
    });
  });

  it('should be created', inject([BrowseAllCompanyService], (service: BrowseAllCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
