import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }

  url='http://localhost:3002/posts';
  getallPayment(){
return this.http.get(this.url);
  }
  Savepaydata(data){
  // console.log(data);
  return this.http.post(this.url,data);
  }
  Deletepay(id:any){
      return this.http.delete(`${this.url}/${id}`);
  }
getOne(id:any){
  return this.http.get(`${this.url}/${id}`);
}

getTwo(id:any){
  return this.http.get(`${this.url}/${id}`);
}

}