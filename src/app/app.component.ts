import { Component, VERSION } from '@angular/core';
import {Router,Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError

} from '@angular/router';
import { transition, style, animate, trigger } from '@angular/animations';




const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

   // Sets initial value to true to show loading spinner on first load
  loading = true

  constructor(private router: Router) {
    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
     })
  }
  

  // // Shows and hides the loading spinner during RouterEvent changes
   navigationInterceptor(event: RouterEvent): void {
     this.loading = true;
   
     
     setTimeout( () => { 
      this.loading = false;
      
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
