import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDetails } from '../../interfaces/task-details';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../modules/shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  providers:[TasksService,TranslateService]
})
export class TaskDetailsComponent implements OnInit {
  constructor(private _TasksService:TasksService,private _ActivatedRoute:ActivatedRoute,private _Router:Router,private _ToastrService:ToastrService,private _TranslateService:TranslateService){}
  ngOnInit(): void {
    this.getTaskDetails()
  }
  imageUrl:string = 'https://crud-8xac.onrender.com/'
  allDetails:TaskDetails={} as TaskDetails;
  getTaskDetails(){
    this._ActivatedRoute.paramMap.subscribe({
      next:params=>{
        let taskId:any = params.get('id');
        console.log(taskId);
        this._TasksService.taskDetails(taskId).subscribe({
          next:data=>{
            console.log(data);
            this.allDetails = data.tasks
          },
          error:err=>{
            console.log(err);
            
          }
        })
        
      }
    })
  }
  complete(elem:any){
    let taskId={
      id : elem
    }
    this._TasksService.completeTask(taskId).subscribe({
      next:data=>{
        console.log(data);
        this._ToastrService.success(this._TranslateService.instant("toastr.complete"),this._TranslateService.instant("toastr.done"));
        this._Router.navigate(['/home']);
      },
      error:err=>{
        console.log(err);
        
    }
    })
  }
}
