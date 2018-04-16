import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICity} from '../../../assets/models/city.interface';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent {
  @Input() cities: ICity[];
  @Output() searchParams: EventEmitter<any> = new EventEmitter<any>();
  searchForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.searchForm = this._formBuilder.group({
      name: [''],
      city: ['', Validators.required],
    });
  }

  search() {
    if (this.searchForm.valid) {
      this.searchParams.emit(this.buildSearchObject(this.searchForm));
    } else {
      Object.keys(this.searchForm.controls).forEach((control: string) => this.searchForm.controls[control].markAsTouched());
    }
  }

  buildSearchObject(form: FormGroup) {
    const result = {};
    // Object.keys(form.controls).forEach( control => result[control] = this.searchForm.controls[control])
  }
}
