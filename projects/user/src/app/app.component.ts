import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lang:any=localStorage.getItem("language")
  constructor(private translate: TranslateService) {
    if(localStorage.getItem("language") != null){
      translate.use(this.lang);
    }
    else{
      translate.use(this.translate.defaultLang);
    }
  }
}
