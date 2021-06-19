import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, RouterStateSnapshot, ActivatedRouteSnapshot  } from '@angular/router';
import { HttpInterceptor } from  '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { User } from './__models/user';
import { LoginFormComponent } from './login-form/login-form.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewHabitComponent } from './new-habit/new-habit.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SigninComponent,
    HomeComponent,
    NewUserComponent,
    NewHabitComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: 'canActivateTeam',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance:"legacy"}
    }
  ]})
export class AppModule { }
