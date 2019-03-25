import { TestBed, inject } from '@angular/core/testing';

import { GetAllEmpNotificationService } from './get-all-emp-notification.service';

describe('GetAllEmpNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllEmpNotificationService]
    });
  });

  it('should be created', inject([GetAllEmpNotificationService], (service: GetAllEmpNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
