import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-acptreceipt',
  templateUrl: './acptreceipt.component.html',
  styleUrls: ['./acptreceipt.component.css']
})
export class AcptreceiptComponent implements OnInit{
id:any;
data: any;
  constructor(private router:ActivatedRoute, private http:HttpClient,private route:Router,private service:PaymentService){}
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.getTwo();
  }
  getTwo() {
    this.service.getTwo(this.id).subscribe(data=>{
      this.data=data;
    });}

    onClick(){
      this.route.navigate(['/afterlogin']);
    }

}
