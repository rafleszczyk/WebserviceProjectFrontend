import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent {
  @Output() searchParams: EventEmitter<any> = new EventEmitter<any>();
  searchForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.searchForm = this._formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  search() {
    if (this.searchForm.valid) {
      this.searchParams.emit(this.buildSearchObject(this.searchForm));
    }
  }

  buildSearchObject(form: FormGroup) {
    const result = {};
    // Object.keys(form.controls).forEach( control => result[control] = this.searchForm.controls[control])
    console.log(form.controls);
  }
}
