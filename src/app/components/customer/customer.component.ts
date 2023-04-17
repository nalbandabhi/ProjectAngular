import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/services/customerservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service:CustomerserviceService, private router:Router){}

  public customers; 

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.service.getUserDetails().subscribe(data=>{
      //console.log(data);
      this.customers = data;
    })
  }

  onDelete(id){
    this.service.removeCustomer(id).subscribe(data=>{
      this.getCustomer();
    })
  }

  onUpdate(id){
    console.log(id);
  }
}
