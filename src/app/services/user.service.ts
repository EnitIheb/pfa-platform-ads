import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = `${API_URL}/api/test/user`;
  private advertiserUrl = `${API_URL}/api/test/advertiser`;
  private consumerUrl = `${API_URL}/api/test/consumer`;
  private adminUrl = `${API_URL}/api/test/admin`;
  private userNameUrl = `${API_URL}/api/user/name/`;
  private userEmailUrl = `${API_URL}/api/user/email/`;

  private username = '';

  userFullName: string = '';
  errorMessage: string;

  constructor(private http: HttpClient) { }

  getAppropriateBorad(authority: string): Observable<string> {
    if (authority == 'admin') { return this.getAdminBoard(); }
    else if (authority == 'advertiser') { return this.getAdvertiserBoard(); }
    else if (authority == 'consumer') { return this.getConsumerBoard(); }
    else { return this.getUserBoard(); }
  }


  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getAdvertiserBoard(): Observable<string> {
    return this.http.get(this.advertiserUrl, { responseType: 'text' });
  }

  getConsumerBoard(): Observable<string> {
    return this.http.get(this.consumerUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  ///////////////////////////////////////////////////////////////

  getNameOfUserByUsername(username: string): Observable<string> {
    return this.http.get(`${this.userNameUrl}${username}`, { responseType: 'text' });
  }

  getUserEmailByUsername(username: string): Observable<string> {
    return this.http.get(`${this.userEmailUrl}${username}`, { responseType: 'text' });
  }


  checkPasswordMatch(username: string, oldPassword: string) {
    return this.http.get(`${API_URL}/api/auth/user/${username}/checkPassMatch/${oldPassword}`, { responseType: 'text' });
  }

  updateUserPassword(username: string, newPassword: string): Observable<any> {
    return this.http.put(`${API_URL}/api/user/${username}/update/password`, newPassword, { responseType: 'text' });
  }

  // we can not change user email
  // updateUserEmail(username: string, newEmail: string): Observable<any> {
  //   return this.http.put(`${API_URL}/api/user/${username}/update/email`, newEmail, { responseType: 'text' });
  // }

  updateUserFullName(username: string, newFullName: string): Observable<any> {
    return this.http.put(`${API_URL}/api/user/${username}/update/name`,newFullName, { responseType: 'text' });
  }
}
