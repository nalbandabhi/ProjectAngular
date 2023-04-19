import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Cbalance } from '../components/models/cbalance';

@Injectable({
  providedIn: 'root'
})
export class CbalanceService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }
//  url1="http://localhost:5051/addCbalance";
 url="http://localhost:5051/getCbalance";
  getCusbalance(){
return this.http.get(this.url);
  }
  SaveCbalance(balance){
    return this.http.post('http://localhost:5051/addCbalance',balance);
  }
}
