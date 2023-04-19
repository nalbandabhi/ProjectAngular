import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../components/models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http: HttpClient) { }

  getCustomers():Observable<Customer>{
    return this.http.get<Customer>('http://localhost:3001/customer');
  }

  getCustomer(id):Observable<Customer>{
    return this.http.get<Customer>('http://localhost:3001/customer/${id}');
  }
  
  addCustomer(customer){
    return this.http.post('http://localhost:3001/customer', customer);
  }
//need work
  removeCustomer(id){
    return this.http.delete(`http://localhost:5051//${id}`);
  }

  updateCustomer(id,customer){
    return this.http.put(`http://localhost:3000/customer${id}`, customer);
  }


  getUserDetails(): Observable<Customer>{
    return this.http.get<Customer>('http://localhost:5051/getCustomer');
  }
  addUserDetails(customer){
    return this.http.post('http://localhost:5051/addCustomer',customer);
  }
  getUserDetail(id):Observable<Customer>{
    return this.http.get<Customer>('http://localhost:5051/getCustomer/${id}');
  }
  deletecustomer(email){
    return this.http.delete(`http://localhost:5051/getCustomer/${email}`)
  }

}
