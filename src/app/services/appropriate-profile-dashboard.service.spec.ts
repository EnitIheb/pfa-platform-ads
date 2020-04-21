import { TestBed, inject } from '@angular/core/testing';

import { AppropriateProfileDashboardService } from './appropriate-profile-dashboard.service';

describe('AppropriateProfileDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppropriateProfileDashboardService]
    });
  });

  it('should be created', inject([AppropriateProfileDashboardService], (service: AppropriateProfileDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
