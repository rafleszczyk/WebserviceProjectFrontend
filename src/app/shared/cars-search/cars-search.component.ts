import {Component} from '@angular/core';
import {CarsService} from '../../services/cars.service';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICar} from '../../../assets/models/car.interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ICarService} from '../../../assets/models/car-service.interface';
import {IBrand} from '../../../assets/models/brand.interface';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.scss']
})
export class CarsSearchComponent {

  historyModal: any;
  selectedCar: ICar;
  filterForm: FormGroup;
  isHistoryLoaded: boolean;
  selectedDetailsIndex: number;
  marksCollection: Observable<string[]>;
  brandsCollection: IBrand[];
  resultsCollection: Observable<ICar[]>;
  serviceHistoryCollection: Observable<ICarService[]>;

  constructor(private _carsService: CarsService, private _fb: FormBuilder, private modalService: NgbModal,
              private _toasterService: ToasterService, private toasterService: ToasterService) {
    this.getCarBrands();
    this.buildFormGroup();
    this.isHistoryLoaded = false;
  }

  getCarBrands() {
    this._carsService.getBrands().subscribe(
      (brands) => this.brandsCollection = brands
    );
  }

  getCarMarks(brand: string) {
    this.marksCollection = this._carsService.getMarks(brand);
    this.filterForm.get('mark').reset('');
  }

  moreEventDetails(index: number) {
    this.selectedDetailsIndex !== index
      ? this.selectedDetailsIndex = index
      : this.selectedDetailsIndex = null;
  }

  buildFormGroup() {
    this.filterForm = this._fb.group({
      vin: ['', [Validators.maxLength(17), Validators.minLength(17)]],
      brand: ['', Validators.required],
      mark: [''],
      productionYear: [''],
    });
  }

  submitForm() {
    if (this.filterForm.valid) {
      this.getCars({
        brand: this.filterForm.get('brand').value,
        productionYear: this.filterForm.get('productionYear').value
      });
    } else {
      Object.keys(this.filterForm.controls).forEach(control => this.filterForm.get(control).markAsTouched());
    }
  }

  getCars(filters) {
    this.resultsCollection = this._carsService.getCars(filters);
  }

  searchByVIN() {
    if (this.filterForm.get('vin').valid) {
      this.resultsCollection = this._carsService.getCarByVIN(this.filterForm.get('vin').value);
    }
  }

  getCarServiceHistory() {
    this.serviceHistoryCollection = this._carsService.getServiceHistory(this.selectedCar.CarID);
  }

  openModal(content, car: ICar) {
    this.selectedCar = car;
    this.getCarServiceHistory();
    this.historyModal = this.modalService.open(content, {
      size: 'lg'
    });
  }

  clearOnCLose() {
    this.selectedCar = null;
    this.serviceHistoryCollection = null;
  }

  getBrand(brandID: number) {
    return this.brandsCollection
      .filter((brand) => brand.BrandID === brandID)
      .map(brand => brand.BrandName);
  }

  followCar(car: ICar) {
    this._carsService.followCar(car.CarID)
      .subscribe(
        () => this._toasterService.pop('success', 'Car Followed', 'Car successfully followed.'),
        () => this._toasterService.pop('success', 'Car Followed', 'Car successfully followed.')
      );
  }
}
