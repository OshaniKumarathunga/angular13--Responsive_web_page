import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing routing components
import { MainNavComponent } from './main-nav/main-nav.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';

// routes for the components
const routes: Routes = [
  // {path: 'home', component:},
  {path: 'doctor' , component:DoctorComponent},
  {path:'signup' ,component:DoctorSignupComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
