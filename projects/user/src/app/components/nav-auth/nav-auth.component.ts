import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedModule } from '../../modules/shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,SharedModule],
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss']
})
export class NavAuthComponent implements OnInit {
  constructor(private _TranslateService:TranslateService){
    localStorage.setItem("language",this._TranslateService.currentLang)
  }

  lang:any =''
  ngOnInit(): void {
    this.lang = localStorage.getItem("language")
  }

  changLanguage(){
    if(localStorage.getItem("language") == "en")
    { 
      localStorage.setItem("language","ar")
    }
    else{
      localStorage.setItem("language",'en')
    }
    location.reload();
  }

}
