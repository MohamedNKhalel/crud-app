import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TasksService } from '../../services/tasks.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blank-nav',
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.scss']
})
export class BlankNavComponent implements OnInit {
  lang:any='en'
  constructor(private _AuthService:AuthService,private _TranslateService:TranslateService){}
  ngOnInit(): void {
    this.lang= localStorage.getItem('language');
    localStorage.setItem('language',this._TranslateService.currentLang)
  }

  logOut(){
    this._AuthService.logOut()
  }
  changeLanguage(){
    console.log(this.lang);
    
    if(localStorage.getItem('language') == 'en'){
      localStorage.setItem('language','ar')
    }else{
      localStorage.setItem('language','en')
    }
    window.location.reload();
    
  }
}
