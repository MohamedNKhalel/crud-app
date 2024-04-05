import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any> = new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient , private _Router:Router) { }
  baseUrl:string='https://crud-8xac.onrender.com'
  loginApi(data:any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/auth/login`,data)
  }
  registerApi(data:any):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/auth/createAccount`,data)
  }
  logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('language');
    this._Router.navigate(['/login'])
  }
  getUserData(){
    this.userData.next(localStorage.getItem('userToken'))
    this.userData.next(jwtDecode(this.userData.getValue()))
    console.log(this.userData.getValue());
    
    
  }
}
