import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string ='https://crud-8xac.onrender.com'
  getUserTasks(userId:any,params:any):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/tasks/user-tasks/${userId}`,{params})
  }
  completeTask(data:any):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}/tasks/complete`,data)
  }
  taskDetails(taskId:any):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/tasks/task/${taskId}`)
  }
}
