import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { TasksService } from './services/tasks.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang:any = localStorage.getItem('language')

  constructor(private translate: TranslateService,private _TasksService:TasksService) {
  if(localStorage.getItem('language')!=null){
    this.translate.use(this.lang);
  }
  else{
    this.translate.use(this.translate.defaultLang)
  }
  console.log(this.translate.currentLang);
  
}
  
  title = 'admin';
}
