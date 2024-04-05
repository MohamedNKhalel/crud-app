import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../modules/shared/shared.module';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,HttpClientModule,CommonModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService,ToastrService]
})
export class LoginComponent {
  constructor(private _FormBuilder:FormBuilder ,private _AuthService:AuthService,private _Router:Router,private _ToastrService:ToastrService,private _TranslateService:TranslateService){}
  emailPlaceholder:string=this._TranslateService.instant("login.placeholder.email");
  passPlaceholder:string=this._TranslateService.instant("login.placeholder.password");
  isClicked:boolean=false
  errMsg:string=''
  loginForm:FormGroup = this._FormBuilder.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required]],
    role:['user']
  })
  navigate(){
    this._Router.navigate(['/register'])
  }
  loginFunction(){
    if(this.loginForm.valid && !this.isClicked){
      this.isClicked=true
      this._AuthService.loginApi(this.loginForm.value).subscribe({
        next:data=>{
          console.log(data);
          this.isClicked=false
          localStorage.setItem('userToken',data.token);
          localStorage.setItem("language",this._TranslateService.currentLang)
          this._Router.navigate(['/home'])
          this._ToastrService.success(this._TranslateService.instant("toastr.success"))
        },
        error:err=>{
          console.log(err);
          this.isClicked=false
          this.errMsg=err.error.message
        }
    })
    }
  }
}

