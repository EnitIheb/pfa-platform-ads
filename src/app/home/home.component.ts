import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private roles: string[];
  private authority: string;

  constructor(
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    // window.location.reload();
    
    // if (this.tokenStorage.isUserLoggedIn()) {
    //   this.roles = this.tokenStorage.getAuthorities();
    //   this.roles.every(role => {
    //     if (role === 'ROLE_ADMIN') {
    //       this.authority = 'admin';
    //       return false;
    //     } else if (role === 'ROLE_ADVERTISER') {
    //       this.authority = 'advertiser';
    //       return false;
    //     } else if (role === 'ROLE_CONSUMER') {
    //       this.authority = 'consumer';
    //       return false;
    //     }
    //     this.authority = 'user';
    //     return true;
    //   });
    // }
  }

}
