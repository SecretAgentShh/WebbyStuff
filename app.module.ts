import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BComponent } from './button/button.component';
import {FormsModule} from '@angular/forms';
import {MComponent} from './movies/movies.component';
@NgModule({
  declarations: [
    AppComponent,BComponent,MComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
