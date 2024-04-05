import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../pipes/search.pipe';
import { TranslateService } from '@ngx-translate/core';
import { TasksService } from '../../services/tasks.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _ToastrService:ToastrService,private _TranslateService:TranslateService,private _TasksService:TasksService){}
  users:User[]=[]
  searchWord:string='';
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this._AuthService.getAllUsers().subscribe({
      next:data=>{
        console.log(data);
        this.users = data.users;
        
      },
      
    })
  }
  dleteUser(userId:string){
    this._AuthService.deleteUser(userId).subscribe({
      next:data=>{
        console.log(data);
        this._ToastrService.success(this._TranslateService.instant("toaster.user.delete"),this._TranslateService.instant("toaster.user.title"));
        this.getAllUsers();
      }
    })
  }
}
