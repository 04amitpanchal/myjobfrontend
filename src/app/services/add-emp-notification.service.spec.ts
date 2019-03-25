import { TestBed, inject } from '@angular/core/testing';

import { AddEmpNotificationService } from './add-emp-notification.service';

describe('AddEmpNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEmpNotificationService]
    });
  });

  it('should be created', inject([AddEmpNotificationService], (service: AddEmpNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
