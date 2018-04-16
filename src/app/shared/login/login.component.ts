import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUserForm: FormGroup;
  loginMechanicForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router) {
    this.buildForm();
  }

  buildForm() {
    this.loginUserForm = this._formBuilder.group({
      login:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.loginMechanicForm = this._formBuilder.group({
      nip:      ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser() {
    if (this.loginUserForm.valid) {
      this._loginService.login(
        this.loginUserForm.controls['login'].value,
        this.loginUserForm.controls['password'].value,
        'client'
      ).subscribe(
        () => this._router.navigate(['home/client'])
      );
    } else {
      Object.keys(this.loginUserForm.controls).forEach((control) => this.loginUserForm.get(control).markAsTouched());
    }
  }

  loginMechanic() {
    if (this.loginMechanicForm.valid) {
      this._loginService.login(
        this.loginMechanicForm.controls['nip'].value,
        this.loginMechanicForm.controls['password'].value,
        'mechanic'
      ).subscribe(
        () => this._router.navigate(['home/workshop'])
      );
    } else {
      Object.keys(this.loginMechanicForm.controls).forEach((control) => this.loginMechanicForm.get(control).markAsTouched());
    }
  }
}
