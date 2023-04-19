import { Component, OnInit } from '@angular/core';
import { Cbalance } from '../models/cbalance';
import { CbalanceService } from 'src/app/services/cbalance.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-balancecus',
  templateUrl: './balancecus.component.html',
  styleUrls: ['./balancecus.component.css']
})
export class BalancecusComponent implements OnInit{
  constructor(private service:CbalanceService, private http:HttpClient){}
  public customers;
  ngOnInit(): void {
    this.getCusbalance();
  }
  getCusbalance(){
    this.service.getCusbalance().subscribe(data=>{
      //console.log(data);
      this.customers = data;
    })
  }
  

}
