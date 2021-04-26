import { AppLanguage } from './../utils/AppLanguage';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  appLanguageEnum = AppLanguage;
  @Input() appLanguage: AppLanguage;

  constructor() { }

  ngOnInit(): void {
  }

}
