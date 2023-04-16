import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit{
  constructor(private router:Router){}
  
  ngOnInit(): void {
   
  }
  onlogClick(){
    // Navigate to /products page
    alert("Logging out!!");
    this.router.navigate(['/']);
  }
  onBtnClick(){
    // Navigate to /products page
    this.router.navigate(['/billpage']);
  }
  oncusClick(){
    this.router.navigate(['/customer']);
  }
}
