import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    HomeScreenComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeScreenComponent]
})
export class AppModule { }
