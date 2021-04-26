import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeScreenComponent,
    NavigationBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeScreenComponent]
})
export class AppModule { }
