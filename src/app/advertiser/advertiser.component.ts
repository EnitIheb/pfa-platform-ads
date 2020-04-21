import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-advertiser',
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.css']
})
export class AdvertiserComponent implements OnInit {
  info: any;
  board: string;
  errorMessage: string;
  // authority:string;

  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit() {
    this.userService.getAdvertiserBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );

    // this.authority=this.token.getUserAuthority();

    // this.userService.getAppropriateBorad(this.authority).subscribe(
    //   data => {
    //     this.board = data;
    //   },
    //   error => {
    //     this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
    //   }
    // );

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
  logout() {
    this.token.signOut();
    // window.location.reload();
  }
}
