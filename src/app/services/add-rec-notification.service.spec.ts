import { TestBed, inject } from '@angular/core/testing';

import { AddRecNotificationService } from './add-rec-notification.service';

describe('AddRecNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRecNotificationService]
    });
  });

  it('should be created', inject([AddRecNotificationService], (service: AddRecNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
