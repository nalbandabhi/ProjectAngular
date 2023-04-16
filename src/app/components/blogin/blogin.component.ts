import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { User } from '../models/user';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogin',
  templateUrl: './blogin.component.html',
  styleUrls: ['./blogin.component.css']
})
export class BloginComponent implements OnInit {

  public loginForm: FormGroup
  constructor(private formBuilder: FormBuilder, private router:Router,private http: HttpClient){}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

 login(){
  this.http.get<any>("http://localhost:3000/user")
  .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });
    if(user){
      alert("Login Success!!");
      this.loginForm.reset();
      this.router.navigateByUrl('/afterlogin');
    } else{
      alert("User Not Found");
    }
  },err=>{
    alert("Something Went wrong")
  })
 }
}


























// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserserviceService } from 'src/app/services/userservice.service';
// import { User } from '../models/user';
// import { FormBuilder, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-blogin',
//   templateUrl: './blogin.component.html',
//   styleUrls: ['./blogin.component.css']
// })
// export class BloginComponent implements OnInit {

//   constructor(private formBuilder: FormBuilder,private service: UserserviceService, private router:Router){}

//   public user=new User;

//   ngOnInit(): void {

//   }

//   onSubmit(form: NgForm){
//     if(form.valid){
//       this.service.addUser(this.user).subscribe(data=>{
//         //console.log(data);
//         alert('Logged in successfully')

//         this.router.navigateByUrl('/');
//       })    
//     } else{
//       alert("Please fix the error");
      
//     }
//   }
// }
