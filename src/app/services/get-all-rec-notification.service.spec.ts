import { TestBed, inject } from '@angular/core/testing';

import { GetAllRecNotificationService } from './get-all-rec-notification.service';

describe('GetAllRecNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllRecNotificationService]
    });
  });

  it('should be created', inject([GetAllRecNotificationService], (service: GetAllRecNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
