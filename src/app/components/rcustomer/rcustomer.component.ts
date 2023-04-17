import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { Customer } from '../models/customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rcustomer',
  templateUrl: './rcustomer.component.html',
  styleUrls: ['./rcustomer.component.css']
})
export class RcustomerComponent implements OnInit {

  constructor(private service: CustomerserviceService, private router:Router){}

  public customer=new Customer;
  

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
  //   if(form.valid){
  //     this.service.addCustomer(this.customer).subscribe(data=>{
  //       //console.log(data);
  //       //alert('Contact created successfully')
  //       this.router.navigateByUrl('/clogin');
  //     })    
  //   } else{
  //     alert("Please fix the error");
      
  //   }

  if(form.valid){
    this.service.addUserDetails(this.customer).subscribe(data=>{
      console.log(data);
    })
    alert('usercreated');
      this.router.navigateByUrl('/clogin');
  }
  else{
    alert("Please fix the error");
  }
}
   }

