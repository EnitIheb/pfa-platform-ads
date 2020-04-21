import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';

import { AdminComponent } from './admin/admin.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouteGuardService } from './services/route-guard.service';
import { CreateOrEditAdComponent } from './create-or-edit-ad/create-or-edit-ad.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent , canActivate: [RouteGuardService] },

    { path: 'user', component: UserComponent , canActivate: [RouteGuardService] },
    { path: 'advertiser', component: AdvertiserComponent , canActivate: [RouteGuardService] },
    { path: 'consumer', component: ConsumerComponent , canActivate: [RouteGuardService] },
    { path: 'admin', component: AdminComponent , canActivate: [RouteGuardService] },
    
    { path: 'ad/:id', component: CreateOrEditAdComponent, canActivate: [RouteGuardService] },
    { path: 'auth/login', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', component: ErrorPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
