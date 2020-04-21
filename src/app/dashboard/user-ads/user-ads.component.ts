import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from 'src/app/services/ad';
import { AdsService } from 'src/app/services/ads.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.css']
})
export class UserAdsComponent implements OnInit {

  ads: Observable<Ad[]>;
  authority: string;

  ad: Ad;
  message: string;
  viewPrefix = '#$~*=view';

  constructor(private adsService: AdsService, private router: Router, private tokenService: TokenStorageService) { }


  ngOnInit() {
    this.authority = this.tokenService.getUserAuthority();
    console.log("user authority (from ads list) is : " + this.authority)
    this.reloadData();
  }

  reloadData() {
    this.ads = this.adsService.getAds();
  }




  deleteAd(id) {
    if (confirm("Are you sure you want to delete this ad ?")) {
      this.adsService.deleteAd(id).subscribe(
        response => {
          console.log(response);
          this.message = `Delete  of Ad ${id} Successful (from angular)`;
          this.router.navigate(['dashboard']);
        }
      )
    } else {
      console.log(`cancel delete of Ad ${id}`);
      this.router.navigate(['dashboard']);
    }
  }

  viewAd(id) {
    this.router.navigate(['ad', `${this.viewPrefix}${id}`]);
  }

  updateAd(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['ad', `${id}`]);
  }

  addAd() {
    this.router.navigate(['ad', '-1']);
  }




}
