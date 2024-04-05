import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../modules/shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule,HttpClientModule,CommonModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[AuthService,ToastrService]
})
export class RegisterComponent {
  constructor(private _FormBuilder:FormBuilder ,private _AuthService:AuthService , private _Router:Router,private _ToastrService:ToastrService,private _TranslateService:TranslateService){}
  namePlaceholder:string = this._TranslateService.instant("register.placeholder.name");
  emailPlaceholder:string = this._TranslateService.instant("register.placeholder.email");
  passPlaceholder:string = this._TranslateService.instant("register.placeholder.password");
  repassPlaceholder:string = this._TranslateService.instant("register.placeholder.repassword");
  isClicked:boolean=false;
  errMsg:string=''
  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/[A-Za-z]+/)]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern(/[A-Za-z]+/)]),
    username:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    role:new FormControl('user')
  },this.confirmPassword)

  navigate(){
    this._Router.navigate(['/login'])
  }
  confirmPassword(control:any){
    if(control.get('password').value == control.get('confirmPassword').value){
      return null
    }
    else{
      return {"misMatch" : true}
    }
  }
  registerFunction(){
      if(this.registerForm.valid && !this.isClicked){
        this.isClicked=true;
        this._AuthService.registerApi(this.registerForm.value).subscribe({
          next:data=>{
            console.log(data);
            this._ToastrService.success('Email created succes')
            this.isClicked=false  
            this._Router.navigate(['/login'])
          },
          error:err=>{
            this.isClicked=false
            console.log(err);
            this.errMsg=err.error.message
          }
        })
      }
  }
}
