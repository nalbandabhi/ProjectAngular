import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:UserserviceService, private router:Router){}

  public users; 

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.service.getUsers().subscribe(data=>{
      //console.log(data);
      this.users = data;
    })
  }

  onDelete(id){
    this.service.removeUser(id).subscribe(data=>{
      this.getUser();
    })
  }

  onUpdate(id){
    console.log(id);
  }
}
