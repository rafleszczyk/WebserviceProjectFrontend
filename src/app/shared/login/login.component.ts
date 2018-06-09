import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUserForm: FormGroup;
  newMechanicForm: FormGroup;
  newUserForm: FormGroup;
  loginMechanicForm: FormGroup;
  modal: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
    private _modalService: NgbModal) {
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

    this.newUserForm = this._formBuilder.group({
      User_name:  ['', Validators.required],
      User_email: ['', Validators.required],
      User_phone: ['', Validators.required],
    });

    this.newMechanicForm = this._formBuilder.group({
      Workshop_NIP:               ['', Validators.required],
      Workshop_address_city:      ['', Validators.required],
      Workshop_address_street:    ['', Validators.required],
      Workshop_address_zip_code:  ['', Validators.required],
      Workshop_description:       ['', Validators.required],
      Workshop_email_address:     ['', Validators.required],
      Workshop_phone_number:      ['', Validators.required],
      Workshop_URL:               ['', Validators.required],
      Workshop_logo_URL:          ['', Validators.required],
      Workshop_average_rating:    ['', Validators.required],
      Workshop_name:              ['', Validators.required],
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

  newAccount(modalRef: any) {
    this.modal = this._modalService.open(modalRef, {size: 'lg'});
  }

  newCreateUser(modalRef: any) {
    this.modal = this._modalService.open(modalRef, {size: 'sm'});
  }
}
