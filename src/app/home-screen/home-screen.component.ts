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



}
