import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';

import {appRoutingModule} from './app-routing.module';

import { PdsMainComponent } from './pds-main/pds-main.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,appRoutingModule ],
  declarations: [ AppComponent, PdsMainComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
