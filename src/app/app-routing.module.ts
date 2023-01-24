import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing routing components
import { MainNavComponent } from './main-nav/main-nav.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { DoctorSignupNextComponent } from './doctor-signup-next/doctor-signup-next.component';

// routes for the components
const routes: Routes = [
  // {path: 'home', component:},
  {path: 'doctor' , component:DoctorComponent},
  {path:'signup' ,component:DoctorSignupComponent },
  {path: 'signupnext' , component:DoctorSignupNextComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
