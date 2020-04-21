import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { API_URL } from '../app.constants';
// import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];

  private userRoles: string[];
  private authority: string = 'blablabla';

  // user:string;
  // private logoutUrl = `${API_URL}/api/auth/signout`;
  constructor(private router: Router
    // private http: HttpClient
  ) { }



  getUserAuthority() {
    if (this.isUserLoggedIn()) {
      this.userRoles = this.getAuthorities();
      this.userRoles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_ADVERTISER') {
          this.authority = 'advertiser';
          return false;
        } else if (role === 'ROLE_CONSUMER') {
          this.authority = 'consumer';
          return false;
        }
        this.authority = 'user';
        return true;
      });
      return this.authority;
    }
  }









  signOut() {
    //////////////send http request to mark user as loggedOut in kafka topic///////////////////
    // this.user = sessionStorage.getItem(USERNAME_KEY);
    // console.log(this.http.post<string>(this.logoutUrl, this.user));
    window.sessionStorage.clear();
    this.router.navigate(['home']);
  }

  isUserLoggedIn() {
    return !(this.getToken() === null);
  }


  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
}
