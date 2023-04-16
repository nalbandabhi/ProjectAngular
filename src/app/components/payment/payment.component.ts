import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  // constructor(private router:Router,private http: HttpClient,private service:PaymentService){}
  // public pay=new Payment;
  constructor(private service:PaymentService,private router:Router){}
  ngOnInit(): void {
    
  }

  // Description: string;
  // accountNumber: string;
  // paymentAmount: number;
  // paymentMethod: string;

  // onSubmitForm(form: NgForm) {
    
  //   if(form.valid){
  //     alert("Login Success!!");
  //     this.service.addUser(this.pay).subscribe(data=>{this.router.navigateByUrl('/paymentsent');})
      
  //   } else{
  //     alert("awaiting autorization");
  //   }
   //} 
addPayment=new FormGroup({
  AccountNumber:new FormControl(``),
  PaymentAmount:new FormControl(``),
  PaymentMethod:new FormControl(``),
  Description:new FormControl(``)
});

Savedata(){
  //console.log(this.addPayment.value);
  this.service.Savepaydata(this.addPayment.value).subscribe((result)=>{
    console.log(result);
    this.router.navigateByUrl('/paymentsent');
  });
}

onBtnClick(){
  // Navigate to /products page
  this.router.navigate(['/paymentsent']);
}

onBtClick(){
  // Navigate to /products page
  this.router.navigate(['/cdash']);
}

}
