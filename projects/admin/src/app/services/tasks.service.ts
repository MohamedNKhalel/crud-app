import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  taskInfo:Task[] = []
  baseUrl:string = 'https://crud-8xac.onrender.com'
  state:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private _HttpClient:HttpClient) { }

  getAllTasks(page:number=1):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/tasks/all-tasks?page=${page}&&limit=6`)
  }
  createTask(data:any):Observable<any>
  { 
    return this._HttpClient.post(`${this.baseUrl}/tasks/add-task`,data)
  }
  deleteTask(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}/tasks/delete-task/${id}`)
  }
  editTask(id:string,data:any):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}/tasks/edit-task/${id}`,data)
  }
}
