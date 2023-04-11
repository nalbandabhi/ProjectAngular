import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserserviceService, private router:Router){}

  public user=new User;

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.service.addUser(this.user).subscribe(data=>{
        //console.log(data);
        //alert('Contact created successfully')
        this.router.navigateByUrl('/');
      })    
    } else{
      alert("Please fix the error");
      
    }
  }
}
