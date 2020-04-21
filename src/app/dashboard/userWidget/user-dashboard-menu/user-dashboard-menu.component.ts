import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { DashboardComponent } from '../../dashboard.component';
import { Router } from '@angular/router';
import { AppropriateProfileDashboardService } from 'src/app/services/appropriate-profile-dashboard.service';

@Component({
  selector: 'app-user-dashboard-menu',
  templateUrl: './user-dashboard-menu.component.html',
  styleUrls: ['./user-dashboard-menu.component.css']
})
export class UserDashboardMenuComponent implements OnInit {

  authority: string;

  constructor(private tokenService: TokenStorageService,private router :Router,private switchProfileService:AppropriateProfileDashboardService) { }

  ngOnInit() {
    this.authority = this.tokenService.getUserAuthority();

  }


  goToAdsList() {
    console.log("profile before clicking: "+this.switchProfileService.getCurrentProfileDashboard());
    this.switchProfileService.switchToAdsList();
    console.log("profile after clicking: "+this.switchProfileService.getCurrentProfileDashboard());

    this.router.navigate(['dashboard']);
 
  }


}
