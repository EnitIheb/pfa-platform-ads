import { Component, OnInit } from '@angular/core';
import { Ad } from '../services/ad';
import { AdsService } from '../services/ads.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-create-or-edit-ad',
  templateUrl: './create-or-edit-ad.component.html',
  styleUrls: ['./create-or-edit-ad.component.css']
})
export class CreateOrEditAdComponent implements OnInit {

  id: string;
  ad: Ad;
  viewPrefix = '#$~*=view';


  constructor(private adsService: AdsService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenStorageService) { }


  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.ad = new Ad();
    // console.log("substring is : " + this.id.substr(0, 9));
    // console.log("id after substracting prefix is : " + this.id.substr(9, this.id.length - 9));
    if (this.id != '-1' && this.id.substr(0, 9) != this.viewPrefix) {
      // console.log("your ad's id (from updateAdd from ngOnInit()) is : " + this.id);
      this.adsService.retrieveAd(this.id).subscribe(
        data => this.ad = data
      )
    }
    else if (this.id != '-1' && this.id.substr(0, 9) == this.viewPrefix) {
      this.adsService.retrieveAd(this.id.substr(9, this.id.length - 9)).subscribe(
        data => this.ad = data
      )
    }
  }

  
  saveAd() {
    if (this.id == '-1') {
      //create Ad
      this.adsService.createAd(this.ad).subscribe(
        data => {
          console.log(data),
            this.router.navigate(['dashboard'])
        }
      )
    } else {
      this.adsService.updateAd(this.id, this.ad).subscribe(
        data => {
          console.log(data),
            this.router.navigate(['dashboard'])
        }
      )
    }
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }

}
