import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUserForm: FormGroup;
  loginMechanicForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.loginUserForm = this._formBuilder.group({
      login:    ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loginMechanicForm = this._formBuilder.group({
      nip:      ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser() {
    if (this.loginMechanicForm.valid) {

    } else {
      Object.keys(this.loginUserForm.controls).forEach((control) => this.loginUserForm.get(control).markAsTouched());
    }
  }

  loginMechanic() {
    if (this.loginMechanicForm.valid) {

    } else {
      Object.keys(this.loginMechanicForm.controls).forEach((control) => this.loginMechanicForm.get(control).markAsTouched());
    }
  }
}
