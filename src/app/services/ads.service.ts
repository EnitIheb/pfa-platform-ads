import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private email = "sbsinformatique@gmail.com";
  private baseUrl = "http://localhost:8081";
  private userEmail="sbsinformatique@gmail.com";

  constructor(private http: HttpClient) { }

  getAds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ads/${this.userEmail}`);
  }

  retrieveAd(id) : Observable<any> {
    return this.http.get(`${this.baseUrl}/ads/${this.userEmail}/${id}`);
  }

  createAd(ad: Ad): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, ad, { responseType: 'text' });
  }

  deleteAd(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Ads/delete/${id}`, { responseType: 'text' });
  }

  updateAd(id: string, ad: Ad): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, ad, { responseType: 'text' });
  }
}
