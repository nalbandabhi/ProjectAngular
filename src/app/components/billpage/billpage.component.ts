import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-billpage',
  templateUrl: './billpage.component.html',
  styleUrls: ['./billpage.component.css']
})
export class BillpageComponent implements OnInit{
constructor(private service:PaymentService,private router:Router){}
paydata:any=[];
  ngOnInit(): void {
    this.service.getallPayment().subscribe((data)=>
    {
      this.paydata=data;
     } );
  }
  deletepay(payid:any){

this.service.Deletepay(payid).subscribe((data)=>{
  // console.log(data);
  this.ngOnInit();
})
  }

  accpttran(tid:any){
    this.router.navigate(['/acptreceipt/'+tid]);
  }
}
