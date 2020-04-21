import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Ad } from '../services/ad';
import { AppropriateProfileDashboardService } from '../services/appropriate-profile-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  info: any;

  board: string;
  errorMessage: string;
  authority: string;
  appropriateProfileDashboard: string;

  constructor(
    private userService: UserService,
    private tokenService: TokenStorageService,
    private switchProfileService: AppropriateProfileDashboardService
  ) { }




  ngOnInit() {
    this.authority = this.tokenService.getUserAuthority();

    // this.appropriateProfileDashboard = this.switchProfileService.getCurrentProfileDashboard();

    this.userService.getAppropriateBorad(this.authority).subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );


    this.info = {
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername(),
      authorities: this.tokenService.getAuthorities()
    };
  }

  logout() {
    this.tokenService.signOut();
    window.location.reload();
  }


}
