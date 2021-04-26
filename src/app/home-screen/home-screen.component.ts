import { AppLanguage } from './../utils/AppLanguage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  appLanguageEnum = AppLanguage;
  appLanguage :AppLanguage;

  constructor() { }

  ngOnInit(): void {  
   this.appLanguage = AppLanguage.English;
  }


  changeLanguage(appLanguage : AppLanguage){
    this.appLanguage = appLanguage;
  }

}
