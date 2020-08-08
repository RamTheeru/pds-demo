import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PdsMainComponent} from './pds-main/pds-main.component';
import {AboutusComponent} from './aboutus/aboutus.component';
const appRoutes : Routes =[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent },
  {path:'login',component:PdsMainComponent},
  {path:'aboutus',component:AboutusComponent}
]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class appRoutingModule{


}