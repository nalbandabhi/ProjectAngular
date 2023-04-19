import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CbalanceService } from 'src/app/services/cbalance.service';
import { Cbalance } from '../models/cbalance';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit{
  constructor(private router:Router,private service:CbalanceService){}
  ngOnInit(): void {
    
  }
  public balance=new Cbalance;
  onSubmit(form: NgForm){
    if(form.valid){
    //console.log(this.addPayment.value);
    this.service.SaveCbalance(this.balance).subscribe((result)=>{
      console.log(result);
    })
    alert("Successfully added");
      this.router.navigateByUrl('/cdash');
  }
  else{
    alert("Please fix the error");
  }
 
  }
  oncusClick(){
    this.router.navigate(['/balancecus']);

}}
