import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as R from 'rxjs';
@Injectable()
export class PdsApiService {



   // Base url
  // baseurl = 'https://paflightplanservice20191223123509.azurewebsites.net/api/PAFlightPlan/';
  baseurl='http://localhost:44302/api/Employee/';

   clientsUrl : string = 'UserTypes';
     constructor(private http: HttpClient) { }
      httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
        //'X-Requested-With': 'XMLHttpRequest',
      'access-Control-Allow-Origin': '*'
       //'access-Control-Allow-Methods:':'GET,POST,OPTIONS,DELETE,PUT'
    })
  }
   getClients() :  R.Observable<any>  {
    console.log(this.baseurl + this.clientsUrl);
  return this.http.get(this.baseurl + this.clientsUrl,this.httpOptions)

}

}