import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-receiptbill',
  templateUrl: './receiptbill.component.html',
  styleUrls: ['./receiptbill.component.css']
})
export class ReceiptbillComponent implements OnInit{
  data: any;
  constructor(private router:ActivatedRoute,private service:PaymentService,private route:Router){}
  id:any;
  ngOnInit(): void {
    
    this.id=this.router.snapshot.params['id'];
    this.getone();
  }
  getone() {
   this.service.getOne(this.id).subscribe(data=>{
    this.data=data;
    
   });
  }
  onClick(){
    // Navigate to /products page
    this.route.navigate(['/cdash']);
  }

}
