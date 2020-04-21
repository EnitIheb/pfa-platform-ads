import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PopularDealsComponent } from './home/ClientSlider/popular-deals/popular-deals.component';
import { AllCategoryComponent } from './home/ClientSlider/all-category/all-category.component';
import { HeroAreaComponent } from './home/hero-area/hero-area.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserDashboardProfileComponent } from './dashboard/userWidget/user-dashboard-profile/user-dashboard-profile.component';
import { UserDashboardMenuComponent } from './dashboard/userWidget/user-dashboard-menu/user-dashboard-menu.component';
import { UserAdsComponent } from './dashboard/user-ads/user-ads.component';
import { CreateOrEditAdComponent } from './create-or-edit-ad/create-or-edit-ad.component';
import { EditUserProfileComponent } from './dashboard/edit-user-profile/edit-user-profile.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    DashboardComponent,
    AdminComponent,
    AdvertiserComponent,
    ConsumerComponent,
    TopNavbarComponent,
    FooterComponent,
    PopularDealsComponent,
    AllCategoryComponent,
    HeroAreaComponent,
    HomeComponent,
    ErrorPageComponent,
    UserDashboardProfileComponent,
    UserDashboardMenuComponent,
    UserAdsComponent,
    CreateOrEditAdComponent,
    EditUserProfileComponent,
    ConfirmEqualValidatorDirective,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
