import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  constructor() { }
  service: FormGroup;
  ngOnInit() {
    this.service = new FormGroup({
      serviceID: new FormControl('',Validators.required),
      account: new FormGroup({
        workshopID: new FormControl('',Validators.required),
        carID: new FormControl('',Validators.required),
        serviceName: new FormControl('',Validators.required),
        date: new FormControl('',Validators.required),
        description: new FormControl('',Validators.required),
      })
    });
  }
}

