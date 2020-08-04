import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';

import { PdsMainComponent } from './pds-main/pds-main.component';
import { HomeComponent } from './home/home.component';


const appRoutes : Routes=[
   //{path :'',redirectTo : '/recipes',pathMatch :'full'},
{path :'',component : HomeComponent},

   {path :'login',component : PdsMainComponent}

];
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules}) ],
  declarations: [ AppComponent, PdsMainComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
