import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.component.html',
  styleUrls: ['./mycontact.component.scss']
})
export class MycontactComponent implements OnInit {
  title = 'validación';
  userEmails = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    });  
   

  constructor() { }

  ngOnInit() {
  }

}
