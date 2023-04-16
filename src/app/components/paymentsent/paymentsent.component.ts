import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-paymentsent',
  templateUrl: './paymentsent.component.html',
  styleUrls: ['./paymentsent.component.css']
})
export class PaymentsentComponent implements OnInit{
  constructor(private service:PaymentService,private router:Router){}
  paymentdata:any=[];
  ngOnInit(): void {
    this.service.getallPayment().subscribe((data)=>
    {console.log(data);
      this.paymentdata=data;
     } );
  }
  onBtnClick(){
    // Navigate to /products page
    this.router.navigate(['/payment']);
  }
  navi(id:any){
    // Navigate to /products page
    this.router.navigate(['/receiptbill/'+id]);
  }
}
