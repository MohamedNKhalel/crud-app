import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:"",canActivate:[authGuard],loadComponent:()=>import("./layouts/blank/blank.component").then(m=>m.BlankComponent),children:[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",loadComponent:()=>import("./components/home/home.component").then((m)=>m.HomeComponent),title:'Home'},
    {path:"details/:id",loadComponent:()=>import("./components/task-details/task-details.component").then((m)=>m.TaskDetailsComponent)}
  ]},
  {path:"",loadComponent:()=>import("./layouts/auth/auth.component").then(m=>m.AuthComponent),children:[
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"login",loadComponent:()=>import("./components/login/login.component").then((m)=>m.LoginComponent),title:'Login'},
    {path:"register",loadComponent:()=>import('./components/register/register.component').then(m=>m.RegisterComponent),title:'Register'}
  ]},
  {path:"**",loadComponent:()=>import("./components/not-found/not-found.component").then((m)=>m.NotFoundComponent )},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
