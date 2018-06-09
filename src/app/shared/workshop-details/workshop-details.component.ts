import {Component, Input} from '@angular/core';
import {IWorkshop} from '../../../assets/models/workshop.interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-workshop-details',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.scss']
})

export class WorkshopDetailsComponent {

  @Input() workshop: IWorkshop;
  @Input() enableEdit: boolean;
  @Input() color: string;
  modal: any;

  constructor(private modalService: NgbModal,
              private _toasterService: ToasterService) {
  }

  open(content) {
    this.modal = this.modalService.open(content);
  }

  saveChanges(name: string, webUrl: string, email: string, zipcode: string,
              city: string, street: string, description: string, phone: string) {
    this.workshop.WorkshopName = name;
    this.workshop.WorkshopURL = webUrl;
    this.workshop.WorkshopEmailAddress = email;
    this.workshop.WorkshopAddressZipCode = zipcode;
    this.workshop.WorkshopAddressCity = city;
    this.workshop.WorkshopAddressStreet = street;
    this.workshop.WorkshopDescription = description;
    this.workshop.WorkshopPhoneNumber = phone;
    this.modal.close();
    this._toasterService.pop('success', 'Changes have been saved', 'Changes provided in Workshop profile have been successfully saved');
  }
}
