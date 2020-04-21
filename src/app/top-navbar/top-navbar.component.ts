import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  private authority: string;

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.authority=this.tokenStorage.getUserAuthority();
  }

  logout() {
    this.tokenStorage.signOut();
    
    // window.location.reload();
  }

}
