import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-workshop-signup-form',
  templateUrl: './workshop-signup-form.component.html',
  styleUrls: ['./workshop-signup-form.component.css']
})

export class WorkshopSignupFormComponent implements OnInit {

 
  constructor() { }
  workshop: FormGroup;
  ngOnInit() {
    this.workshop = new FormGroup({
      companyName: new FormControl('',Validators.required),
      account: new FormGroup({
        NIP: new FormControl('',[Validators.required,Validators.min(10), Validators.maxLength(10)]),
        cityAdress: new FormControl('',Validators.required),
        streetAdress: new FormControl('',Validators.required),
        zipCodeAdress: new FormControl('',Validators.required),
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',Validators.required),
        phoneNumber: new FormControl('',Validators.required),
        URL: new FormControl('',Validators.required),
      })
    });
  }


}
