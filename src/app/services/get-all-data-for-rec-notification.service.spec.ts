import { TestBed, inject } from '@angular/core/testing';

import { GetAllDataForRecNotificationService } from './get-all-data-for-rec-notification.service';

describe('GetAllDataForRecNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllDataForRecNotificationService]
    });
  });

  it('should be created', inject([GetAllDataForRecNotificationService], (service: GetAllDataForRecNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
