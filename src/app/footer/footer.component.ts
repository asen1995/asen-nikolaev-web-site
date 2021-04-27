import { Component, OnInit ,Input } from '@angular/core';
import { AppLanguage } from './../utils/AppLanguage';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  appLanguageEnum = AppLanguage;
  @Input() appLanguage: AppLanguage;

  constructor() { }

  ngOnInit(): void {
  }

}
