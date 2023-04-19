import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { RcustomerComponent } from './components/rcustomer/rcustomer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BloginComponent } from './components/blogin/blogin.component';
import { CloginComponent } from './components/clogin/clogin.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentsentComponent } from './components/paymentsent/paymentsent.component';
import { AfterloginComponent } from './components/afterlogin/afterlogin.component';
import { BillpageComponent } from './components/billpage/billpage.component';
import { CdashComponent } from './components/cdash/cdash.component';
import { ReceiptbillComponent } from './components/receiptbill/receiptbill.component';
import { AcptreceiptComponent } from './components/acptreceipt/acptreceipt.component';
import { BalanceComponent } from './components/balance/balance.component';
import { BillerbalanceComponent } from './components/billerbalance/billerbalance.component';
import { BalancecusComponent } from './components/balancecus/balancecus.component';



const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'forgotpass', component:ForgotpassComponent},
  {path:'register', component:RegisterComponent},
  {path:'user', component:UserComponent},
  {path:'rcustomer', component:RcustomerComponent},
  {path:'customer', component:CustomerComponent},
  {path:'blogin', component:BloginComponent},
  {path:'clogin', component:CloginComponent},
  {path:'payment',component:PaymentComponent},
  {path:'paymentsent',component:PaymentsentComponent},
  {path:'afterlogin',component:AfterloginComponent},
  {path:'billpage',component:BillpageComponent},
  {path:'cdash',component:CdashComponent},
  {path:'receiptbill/:id',component:ReceiptbillComponent},
  {path:'acptreceipt/:id',component:AcptreceiptComponent},
  {path:'balance',component:BalanceComponent},
  {path:'billerbalance',component:BillerbalanceComponent},
  {path:'balancecus',component:BalancecusComponent},
  {path:'**', component:NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
