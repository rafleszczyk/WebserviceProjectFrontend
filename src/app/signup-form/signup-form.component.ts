import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  template:'<form novalidate></form>',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }
  user: FormGroup;
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('',Validators.required),
      account: new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email]),
        confirm: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',Validators.required),
        phoneNumber: new FormControl('',Validators.required)
      })
    });
  }

}
