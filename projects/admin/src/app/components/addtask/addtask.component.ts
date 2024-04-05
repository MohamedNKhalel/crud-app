import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HomeComponent } from '../home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../interfaces/task';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss'],
  
})
export class AddtaskComponent implements OnInit{
  constructor(private _AuthService:AuthService,private _TasksService:TasksService,private _ToastrService:ToastrService,private _MatDialogRef:MatDialogRef<AddtaskComponent>,private _TranslateService:TranslateService){}
  isClicked:boolean=true;
  showLoad:boolean=false;
  fileName:string = ''
  taskInfo!:any;
  taskDeadline:string = '';
  state!:boolean 
  formValue!:object
  ngOnInit(): void {
    this.getAllUsers();
    this.formValue = this.createTaskForm.value;
    this._TasksService.state.subscribe((data)=>{
      this.state = data;
    })
    this.taskInfo=this._TasksService.taskInfo;
    console.log(this.taskInfo);
    this.taskDeadline=this.taskInfo.deadline.split('-').reverse().join('-');
    if(this.taskInfo != null){
      this.createTaskForm.get('title')?.setValue(this.taskInfo.title);
      this.createTaskForm.get('userId')?.setValue(this.taskInfo.userId?._id);
      this.createTaskForm.get('deadline')?.setValue(this.taskDeadline);
      this.createTaskForm.get('description')?.setValue(this.taskInfo.description);  
      this.createTaskForm.get('status')?.setValue(this.taskInfo.status);
      this.createTaskForm.get('image')?.setValue(this.taskInfo.image);
    }
    console.log(new Date(this.taskDeadline).toISOString());
  }
  createTaskForm:FormGroup = new FormGroup({
    title: new FormControl('' || this.taskInfo?.title  ,  [Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    userId: new FormControl('' || this.taskInfo?.userId?._id , [Validators.required]),
    image: new FormControl(''  || this.taskInfo?.image , [Validators.required]),
    description: new FormControl('' || this.taskInfo?.description ,  [Validators.required,Validators.maxLength(100)]),
    deadline: new FormControl('' ||  this.taskDeadline,[Validators.required]),
  })

  
  users: any[] = [];
  getAllUsers(){
    this._AuthService.getAllUsers().subscribe({
      next:data=>{
        console.log(data);
        this.users=data.users
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  createTaskFunction(){
    let formdata = this.formDataGenerate();
    this.showLoad = true
    console.log(this.createTaskForm.value);
    this._TasksService.createTask(formdata).subscribe({
      next:data=>{
        this.showLoad =false
        console.log(data);
        this._ToastrService.success(this._TranslateService.instant("toaster.addTask.create"),this._TranslateService.instant("toaster.addTask.title"));
        this._MatDialogRef.close(true);
      }
    })
  }

  updateTask(){
    let formdata = this.formDataGenerate();
    this.showLoad = true
    this._TasksService.editTask(this.taskInfo._id,formdata).subscribe({
      next:data=>{
        console.log(data);
        this.showLoad = false
        this._TasksService.getAllTasks().subscribe(data=>{
          console.log(data);
        })
        this._ToastrService.success(this._TranslateService.instant("toaster.addTask.update"),this._TranslateService.instant("toaster.addTask.title"));
        this._MatDialogRef.close(true);
      }
    })
  }
  formDataGenerate(){
    let formData = new FormData();
    let newaDate = moment(this.createTaskForm.value?.['deadline']).format('DD-MM-YYYY');
    Object.entries(this.createTaskForm.value).forEach(([key,value]:any)=>{
      if(key=='deadline'){
        formData.append(key,newaDate);
      }
      else{
        formData.append(key,value);
      }
    })
    return formData;
  }

  sendImageData(event:any){
    this.createTaskForm.get('image')?.setValue(event.target.files[0]);
    this.fileName=event.target.files[0].name;
    console.log(event.target.files[0]);
  }
}
