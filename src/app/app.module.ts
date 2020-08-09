import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {appRoutingModule} from './app-routing.module';
//import {HttpClientModule} from "@angular/common/http";

import { PdsMainComponent } from './pds-main/pds-main.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogintabComponent } from './logintab/logintab.component';
import { ScrollingComponent } from './scrolling/scrolling.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,appRoutingModule ],
  declarations: [ AppComponent, PdsMainComponent, HomeComponent, LoadingComponent, AboutusComponent, LogintabComponent, ScrollingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
