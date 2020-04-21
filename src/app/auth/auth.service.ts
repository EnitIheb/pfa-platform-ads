import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { API_URL } from '../app.constants';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${API_URL}/api/auth/signin`;
  private signupUrl = `${API_URL}/api/auth/signup`;


  // userFullName: string = '';



  constructor(
    private http: HttpClient,
    // private tokenService: TokenStorageService
  ) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }








  // getUserFullName() {
  //   if (this.tokenService.isUserLoggedIn()) {
  //     this.getNameOfUserByUsername(this.tokenService.getUsername()).subscribe(
  //       response => {
  //         console.log(response);
  //         this.userFullName = response;
  //       }
  //     )
  //     return this.userFullName;
  //   }
  // }

  // getNameOfUserByUsername(username: string) {
  //   return this.http.get<string>(`${API_URL}/api/user/name/${username}`);
  // }
}
