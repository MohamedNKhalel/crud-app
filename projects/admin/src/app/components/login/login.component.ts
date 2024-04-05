import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router,private _ToastrService:ToastrService,private _TranslateService:TranslateService){}
  eye:boolean=false
  toggleEye(){
    this.eye= !this.eye
  }
  isLoading:boolean=false
  errMsg:string=''
  userId:string =''
  language:any = this._TranslateService.currentLang
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.pattern(/^(?=.*[A-Za-z]).*$/)]),
    role: new FormControl('admin')
  })

  loginFunction(){
    this.isLoading = true
    this._AuthService.loginApi(this.loginForm.value).subscribe({
      next:data=>{
        console.log(data);
        this._Router.navigate(['/home'])
        this.isLoading = false
        this.userId=data.userId
        localStorage.setItem('adminToken',data.token)
        localStorage.setItem('language',this._TranslateService.currentLang)
        this._ToastrService.success(this._TranslateService.instant("toaster.login.success"),this._TranslateService.instant("toaster.login.welcome"))
      },
      error:err=>{
        console.log(err);
        this.isLoading = false
        this.errMsg=err.error.message
        
      }
    })
  }
}
