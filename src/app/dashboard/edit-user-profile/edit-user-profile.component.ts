import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  form: any = {};
  fullName: string;
  username: string;
  userEmail: string;
  currentEmailCorrect = false;
  currentPasswordCorrect = false;
  currentPasswordMatchResult: string;

  constructor(
    private tokenService: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.tokenService.isUserLoggedIn()) {
      this.username = this.tokenService.getUsername();
      this.userService.getUserEmailByUsername(this.username).subscribe(
        data => {
          console.log(data);
          this.userEmail = data;
        }
      )
    }
  }


  updateFullName(firstName, lastName) {
    this.fullName = firstName + " " + lastName;
    this.userService.updateUserFullName(this.username, this.fullName).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['dashboard'])
          .then(() => {
            window.location.reload();
          });
      }
    )
  }


  // we can't change email
  // updateEmail(currentEmail, newEmail) {
  //   console.log("real user email is : " + this.userEmail);
  //   if (currentEmail == this.userEmail) {
  //     console.log("entred current email matches real current email")
  //     this.userService.updateUserEmail(this.username, newEmail).subscribe(
  //       data => {
  //         console.log(data),
  //           this.currentEmailCorrect = true,
  //           this.router.navigate(['dashboard'])
  //             .then(() => {
  //               window.location.reload();
  //             });
  //       }
  //     )
  //   } else {
  //     this.currentEmailCorrect = false;
  //   }
  // }

  updatePassword(currentPassword, newPassword) {
    console.log("entred current password: " + currentPassword);
    this.userService.checkPasswordMatch(this.username, currentPassword).subscribe(
      data => {
        console.log(data);
        this.currentPasswordMatchResult = data;
        if (this.currentPasswordMatchResult == 'match') {
          console.log("current password match");
          this.currentPasswordCorrect = true;
          this.userService.updateUserPassword(this.username, newPassword).subscribe(
            data => {
              console.log(data);
              this.router.navigate(['dashboard'])
                .then(() => {
                  window.location.reload();
                });
            }
          )
        } else if (this.currentPasswordMatchResult == 'dont match') {
          this.currentPasswordCorrect = false;
        }
      });


  }
}
