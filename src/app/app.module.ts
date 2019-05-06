import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
