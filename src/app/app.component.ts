import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private authority: string;

  constructor(
    private tokenStorage: TokenStorageService,
    private titleService: Title,
    private meta: Meta
  ) {
    titleService.setTitle('SignIn/SignOut-Angular-Spring boot');
    meta.updateTag({name:'viewport',content:'width=device-width, initial-scale=1'});
    meta.addTag({name:'X-UA-Compatible',content:'IE=edge'},true);
    meta.addTag({name:'author',content:'mmb@007'},true);
   }

  ngOnInit() {
      this.authority=this.tokenStorage.getUserAuthority();
  }
  
}
