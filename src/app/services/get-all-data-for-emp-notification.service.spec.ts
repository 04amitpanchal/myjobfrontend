import { TestBed, inject } from '@angular/core/testing';

import { GetAllDataForEmpNotificationService } from './get-all-data-for-emp-notification.service';

describe('GetAllDataForEmpNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllDataForEmpNotificationService]
    });
  });

  it('should be created', inject([GetAllDataForEmpNotificationService], (service: GetAllDataForEmpNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
