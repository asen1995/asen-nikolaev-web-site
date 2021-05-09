import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingSceenComponent } from './loading-sceen/loading-sceen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    
    HomeScreenComponent,
    NavigationBarComponent,
    FooterComponent,
    LoadingSceenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [HomeScreenComponent]
})
export class AppModule { }
