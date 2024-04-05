import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss']
})
export class AuthNavComponent implements OnInit {
  lang:any ='en'
  constructor(){}
  ngOnInit(): void {
    this.lang = localStorage.getItem('language')
  }


  changeLanguage(){
    if(localStorage.getItem('language') == 'en'){
      localStorage.setItem('language','ar')
    }else{
      localStorage.setItem('language','en')
    }
    location.reload();
  }
}
