import { Component, Inject, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddtaskComponent } from '../addtask/addtask.component';
import { Overlay, ToastrService } from 'ngx-toastr';
import { Task } from '../../interfaces/task';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  constructor(private _AuthService:AuthService,private _TasksService:TasksService,public dialog:MatDialog,private _ToastrService:ToastrService,private _TranslateService:TranslateService){}
  lang!:any
  limit:number = 0;
  currentPage:number = 1;
  total:number = 0;
  pageChanged(event:any){
    this._TasksService.getAllTasks(event).subscribe({
      next:data=>{
        console.log(data);
        this.currentPage = event;
        this.userTasks = data.tasks
        this.total = 6;
        this.limit = 3;
      }
    })
  }
  users: any[] = [];
  status: any[]= [
    "complete","In-Progress"
  ];
  searchWord:string = '';
  searchUser:string = '';
  searchStatus:string = '';
  searchDate:string = '';
  userTasks:Task[] = []
  allUsers:any
  imageUrl:string = 'https://crud-8xac.onrender.com/'
  ngOnInit(): void {
    this.getAllTasks()
    this.getAllUsers()
    
  }
  getAllUsers(){
    this._AuthService.getAllUsers().subscribe({
      next:data=>{
        console.log(data);
        this.users=data.users;
        console.log(this.users);

      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  getAllTasks(){
    this._TasksService.getAllTasks(this.currentPage).subscribe({
      next:data=>{
        console.log(data);
        this.userTasks = data.tasks
        this.total = data.totalItems;
        this.limit = data.tasks.length;
        const Newdata = this.userTasks.map(task=>task.userId)
        this.allUsers = Newdata
        console.log(this.allUsers);
        console.log(this.userTasks);
        
      },
    })
  }
  addTask(){
    this._TasksService.state.next(false);
    this._TasksService.taskInfo = [];
    const dialogRef = this.dialog.open(AddtaskComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.getAllTasks();
      }
      console.log('The dialog was closed');
    });
  }
  deleteTask(id:string){
    this._TasksService.deleteTask(id).subscribe({
      next:data=>{
        console.log(data);
        this.getAllTasks()
        this._ToastrService.success(this._TranslateService.instant("toaster.home.delete"),this._TranslateService.instant("toaster.home.title"));
        
    }
    })
  }
  updataTask(element:any){
    this._TasksService.state.next(true);
    this._TasksService.taskInfo=element;
    const dialogRef = this.dialog.open(AddtaskComponent,{});
    dialogRef.afterClosed().subscribe(result=>{
      if(result == true){
        this.getAllTasks();
      }
    })
    }
}
