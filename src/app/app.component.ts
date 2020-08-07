import { Component, VERSION } from '@angular/core';
import {Router,Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError

} from '@angular/router';







@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

   // Sets initial value to true to show loading spinner on first load
  load = true

  constructor(private router: Router) {
    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
     })
  }
  

  // // Shows and hides the loading spinner during RouterEvent changes
   navigationInterceptor(event: RouterEvent): void {
     this.load = true;
   
     
     setTimeout( () => { 
      this.load = false;
      
     },7000)
  //   setTimeout( () => { /*Your Code*/ 
  //   if (event instanceof NavigationStart) {
  //     this.loading = true
  //   }
  //   if (event instanceof NavigationEnd) {
  //     this.loading = false
  //   }

  //   // Set loading state to false in both of the below events to hide the spinner in case a request fails
  //   if (event instanceof NavigationCancel) {
  //     this.loading = false
  //   }
  //   if (event instanceof NavigationError) {
  //     this.loading = false
  //   }
  //   }, 7000 );
   }
}
