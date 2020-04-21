import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppropriateProfileDashboardService {

  private appropriateProfileDashboard: string='list-ads';

  constructor() { }

  getCurrentProfileDashboard() {
    return this.appropriateProfileDashboard;
  }

  isSetToAdsList() {
    return (this.appropriateProfileDashboard == 'list-ads');
  }

  isSetToEditProfileInfo() {
    return (this.appropriateProfileDashboard == 'edit-profile-info')
  }

  switchToAdsList() {
    this.appropriateProfileDashboard = 'list-ads';
    // return this.appropriateProfileDashboard;
  }

  switchToEditProfileInfo() {
    this.appropriateProfileDashboard = 'edit-profile-info';
    // return this.appropriateProfileDashboard;
  }
}
