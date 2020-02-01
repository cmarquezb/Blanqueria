import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymenu',
  templateUrl: './mymenu.component.html',
  styleUrls: ['./mymenu.component.scss']
})
export class MymenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navbarOpen = false; 

  toggleNavbar () { 
    this.navbarOpen =! this.navbarOpen; 
  }
}