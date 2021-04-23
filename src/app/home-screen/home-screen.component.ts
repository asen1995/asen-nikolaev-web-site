import { AppLanguage } from './../utils/AppLanguage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  
  private appLanguage = AppLanguage;

  bgLanguage:boolean;
  enLanguage:boolean;
  
  constructor() { }

  ngOnInit(): void {
   this.bgLanguage = false;
   this.enLanguage = true;
  }


  changeLanguage(language : string){
    if(language === 'en'){
      this.bgLanguage = false;
      this.enLanguage = true;
    }else if(language === 'bg'){
      this.bgLanguage = true;
      this.enLanguage = false;
    }
  }

}
