import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from '../../services/tasks.service';
import { Usertask } from '../../interfaces/usertask';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../modules/shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,NgxPaginationModule,HttpClientModule,SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[AuthService,TasksService]
})
export class HomeComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _TasksService:TasksService,private _ToastrService:ToastrService,private _TranslateService:TranslateService){}
  
  userTasks:Usertask[]=[]
  items:any[] =[]
  pageSize:number=0;
  currentPage:number=1;
  total:number =0;
  imageUrl:string = 'https://crud-8xac.onrender.com/'
  userName:any = this._AuthService.userData.getValue()
  ngOnInit(): void {
    this._AuthService.getUserData()
    this.getUserTasks()
  }
  getUserTasks(){
    let params={
      page:this.currentPage,
      limit:this.pageSize,
      status:"In-Progress"
    }
    this._TasksService.getUserTasks(this._AuthService.userData.getValue().userId,params).subscribe({
      next:data=>{
        console.log(data);
        this.userTasks=data.tasks
        console.log(this.userTasks);
        this.total = data.totalItems;
        this.pageSize=6;
        
      },
      error:err=>{
        console.log(err);
        if(err.error.message="No Tasks Found Assgined To This ID..."){
          this.userTasks=[]
        }
      }
    })
  }
  pageChanged(event:any){
    this.currentPage=event
    console.log(this.currentPage);
    this.getUserTasks()
  }
  completeTask(taskId:any){
    let data = {
      id : taskId
    }
    this._TasksService.completeTask(data).subscribe({
      next:data=>{
        console.log(data);
        this._ToastrService.success(this._TranslateService.instant("toastr.complete"),this._TranslateService.instant("toastr.done"))
        this.getUserTasks();
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
