import { AppLanguage } from './../utils/AppLanguage';
import { Component, OnInit } from '@angular/core';
import { Animations } from '../animation/animation';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  animations: [Animations.ElementFadeIn]
})
export class HomeScreenComponent implements OnInit {

  appLanguageEnum = AppLanguage;
  appLanguage: AppLanguage;

  showHomeScreen: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showHomeScreen = false;
    this.appLanguage = AppLanguage.English;

    setTimeout(() => {
      this.showHomeScreen = true;
    }, 1500);

  }

  changeLanguage(appLanguage: AppLanguage) {
    this.appLanguage = appLanguage;
  }

}
