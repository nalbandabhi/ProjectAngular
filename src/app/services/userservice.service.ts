import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User>{
    return this.http.get<User>('http://localhost:3000/user');
  }

  getUser(id):Observable<User>{
    return this.http.get<User>('http://localhost:3000/user/${id}');
  }
  
  addUser(user){
    return this.http.post('http://localhost:3000/user', user);
  }

  removeUser(id){
    return this.http.delete(`http://localhost:3000/user/${id}`);
  }

  updateUser(id,user){
    return this.http.put(`http://localhost:3000/user${id}`, user);
  }

  //new apis

  getUserDetails(): Observable<User>{
    return this.http.get<User>('http://localhost:5051/getBiller');
  }
  addUserDetails(biller){
    return this.http.post('http://localhost:5051/addBiller',biller);
  }
  getUserDetail(id):Observable<User>{
    return this.http.get<User>('http://localhost:5051/getCustomer/${id}');
  }
}
