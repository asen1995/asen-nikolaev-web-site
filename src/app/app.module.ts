import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeScreenComponent } from './home-screen/home-screen.component';

@NgModule({
  declarations: [
    HomeScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeScreenComponent]
})
export class AppModule { }
