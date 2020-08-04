import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pds-main',
  templateUrl: './pds-main.component.html',
  styleUrls: ['./pds-main.component.css']
})
export class PdsMainComponent implements OnInit {
  img : string ;
  constructor() { }

  ngOnInit() {
    
    this.img = 'https://github.com/RamTheeru/pds/blob/master/src/app/images/pdslogo.jpeg?raw=true'
   
  }

}