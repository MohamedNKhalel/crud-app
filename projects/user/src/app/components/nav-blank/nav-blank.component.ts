import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../modules/shared/shared.module';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink,RouterLinkActive,SharedModule],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
  providers:[AuthService]
})
export class NavBlankComponent implements OnInit{
  constructor(private _AuthService:AuthService){}
  lang:any = ''
  ngOnInit(): void {
    this.lang = localStorage.getItem("language")
  }
  logout(){
    this._AuthService.logout()
  }
  changeLanguage()
  {
    if(localStorage.getItem("language") == "en"){
      localStorage.setItem("language","ar")
    }
    else{
      localStorage.setItem("language","en")
    }
    window.location.reload();
  }
}
