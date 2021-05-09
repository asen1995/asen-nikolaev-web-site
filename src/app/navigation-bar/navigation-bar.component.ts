import { AppLanguage } from './../utils/AppLanguage';
import { Component, OnInit,Input } from '@angular/core';
import { NavigationContentType } from '../utils/NavigationContentType';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  appLanguageEnum = AppLanguage;
  @Input() appLanguage: AppLanguage;

  navigationContentType = NavigationContentType;
  navigationContentChoosen: NavigationContentType;

  constructor() { }

  ngOnInit(): void {
    this.navigationContentChoosen = NavigationContentType.AboutMe;
  }


  changeNavContent(navigationContentChoosen: NavigationContentType){
    this.navigationContentChoosen = navigationContentChoosen;
  }
  
}
