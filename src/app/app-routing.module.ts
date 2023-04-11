import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillerLoginComponent } from './components/biller-login/biller-login.component';
import { BillRegistrationComponent } from './components/bill-registration/bill-registration.component';
import { CustLoginComponent } from './components/cust-login/cust-login.component';
import { CustRegistrationComponent } from './components/cust-registration/cust-registration.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'biller-login', component:BillerLoginComponent},
  {path:'bill-registration', component:BillRegistrationComponent},
  {path:'cust-login', component:CustLoginComponent},
  {path:'cust-registration', component:CustRegistrationComponent},
  {path:'forgotpass', component:ForgotpassComponent},
  {path:'register', component:RegisterComponent},
  {path:'user', component:UserComponent},
  {path:'**', component:NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
