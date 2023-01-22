import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import flexLayout
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';

// Angular material
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainNavComponent } from './main-nav/main-nav.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DoctorComponent,
    DoctorSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
