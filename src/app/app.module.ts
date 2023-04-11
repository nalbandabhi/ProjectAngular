import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustRegistrationComponent } from './components/cust-registration/cust-registration.component';
import { CustLoginComponent } from './components/cust-login/cust-login.component';
import { BillerLoginComponent } from './components/biller-login/biller-login.component';
import { BillRegistrationComponent } from './components/bill-registration/bill-registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustRegistrationComponent,
    CustLoginComponent,
    BillerLoginComponent,
    BillRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ForgotpassComponent,
    NotfoundComponent,
    RegisterComponent,
    UserComponent
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
