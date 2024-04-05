import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = 'https://crud-8xac.onrender.com'
  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  loginApi(data:object):Observable<any>
  { 
    return this._HttpClient.post(`${this,this.baseUrl}/auth/login`,data)
  }

  logOut(){
    localStorage.removeItem('adminToken');
    localStorage.removeItem('language');
    this._Router.navigate(['/login'])
    window.location.reload()
  }
  getAllUsers():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/auth/users`)
  }
  deleteUser(userId:string):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/auth/user/${userId}`)
  }
}
