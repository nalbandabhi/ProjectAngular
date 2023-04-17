import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { User } from '../models/user';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private service: UserserviceService, private router:Router){}

  public user=new User;

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
  //   if(form.valid){
  //     this.service.addUser(this.user).subscribe(data=>{
  //       //console.log(data);
  //       alert('Registered successfully')
  //       this.router.navigateByUrl('/blogin');
  //     })    
  //   } else{
  //     alert("Please fix the error");
      
  //   }
  // }
  if(form.valid){
    this.service.addUserDetails(this.user).subscribe(data=>{
      console.log(data);
    })
    alert('usercreated');
      this.router.navigateByUrl('/blogin');
  }
  else{
    alert("Please fix the error");
  }
}
}
