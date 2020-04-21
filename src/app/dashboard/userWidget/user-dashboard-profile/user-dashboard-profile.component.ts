import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { DashboardComponent } from '../../dashboard.component';
import { AppropriateProfileDashboardService } from 'src/app/services/appropriate-profile-dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-dashboard-profile',
  templateUrl: './user-dashboard-profile.component.html',
  styleUrls: ['./user-dashboard-profile.component.css']
})
export class UserDashboardProfileComponent implements OnInit {

  username: string;
  userFullName: string;
  userEmail:string;
  errorMessage: string;

  dash: DashboardComponent;

  constructor(
    private userService: UserService,
    private tokenService: TokenStorageService,
    private switchProfileService: AppropriateProfileDashboardService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.tokenService.isUserLoggedIn()) {
      this.username = this.tokenService.getUsername();
      this.userService.getNameOfUserByUsername(this.username).subscribe(
        data => {
          console.log(data);
          this.userFullName = data;
        },
        error => {
          this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
        }
      )
      this.userService.getUserEmailByUsername(this.username).subscribe(
        data => {
          console.log(data);
          this.userEmail = data;
        },
        error => {
          this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
        }
      )
    }
  }


  goToEditProfileInfo() {

    console.log("profile before clicking: " + this.switchProfileService.getCurrentProfileDashboard());
    this.switchProfileService.switchToEditProfileInfo();
    console.log("profile after clicking: " + this.switchProfileService.getCurrentProfileDashboard());

    this.router.navigate(['dashboard']);


  }

}
