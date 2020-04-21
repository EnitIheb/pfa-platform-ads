import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  role: string;
  roles:string[]=[];
  selectedVal:string='';
  constructor(private authService: AuthService) { }

  ngOnInit() {}
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedVal = event.target.value;
    console.log("selected value is : "+ this.selectedVal);
  }
  onSubmit() {
    console.log(this.form);
    if(this.selectedVal==="1"){
      this.role='consumer';
    }else if(this.selectedVal==="2"){
      this.role='advertiser';
    }
    // console.log("role : "+this.role);
    this.roles.push(this.role);
    // console.log("roles : "+this.roles);
 
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.roles);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        // this.navigateAndReload();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
