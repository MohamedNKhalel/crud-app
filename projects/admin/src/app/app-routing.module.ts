import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from 'projects/admin/src/app/components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from 'projects/admin/src/app/components/blank-layout/blank-layout.component';
import { LoginComponent } from 'projects/admin/src/app/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { ConfirmLeavingComponent } from './components/confirm-leaving/confirm-leaving.component';

const routes: Routes = [
  {path:"",canActivate:[authGuard],component:BlankLayoutComponent,children:[
    {path:"",redirectTo:'home',pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"users",component:UsersComponent},
    {path:"addtask",component:AddtaskComponent},
    {path:"confirm",component:ConfirmLeavingComponent},
  ]},
  {path:'',component:AuthLayoutComponent,children:[
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"login",component:LoginComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
