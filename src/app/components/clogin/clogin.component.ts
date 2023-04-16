import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { Customer } from '../models/customer';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {

  public loginForm: FormGroup
  constructor(private formBuilder: FormBuilder, private router:Router,private http: HttpClient){}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

 login(){
  this.http.get<any>("http://localhost:3001/customer")
  .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });
    if(user){
      alert("Login Success!!");
      this.loginForm.reset();
      this.router.navigateByUrl('/cdash');
    } else{
      alert("User Not Found");
    }
  },err=>{
    alert("Something Went wrong")
  })
 }
  
}



















//constructor(private service: CustomerserviceService, private router:Router){}

  // public customer=new Customer;

  // ngOnInit(): void {

  // }

  // onSubmit(form: NgForm){
  //   if(form.valid){
  //     this.service.addCustomer(this.customer).subscribe(data=>{
  //       //console.log(data);
  //       alert('Logged in successfully')
  //       //this.router.navigateByUrl('/customer');
  //     })    
  //   } else{
  //     alert("Please fix the error");
      
  //   }
  // }
