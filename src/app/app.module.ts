import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    HeaderComponent,
    FooterComponent,
    ForgotpassComponent,
    NotfoundComponent,
    RegisterComponent,
    UserComponent,
    RcustomerComponent,
    CustomerComponent,
    BloginComponent,
    CloginComponent,
    PaymentComponent,
    PaymentsentComponent,
    AfterloginComponent,
    BillpageComponent,
    CdashComponent,
    ReceiptbillComponent,
    AcptreceiptComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
