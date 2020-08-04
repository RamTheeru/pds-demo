import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PdsMainComponent } from './pds-main/pds-main.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PdsMainComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
