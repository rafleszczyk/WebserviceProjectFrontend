import {WorkshopService} from './../../services/workshop.service';
import {PanelClientService} from './../../services/panel-client.service';
import {Component, OnInit} from '@angular/core';
import {ICar} from '../../../assets/models/car.interface';
import {IComment} from '../../../assets/models/comment.interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToasterService} from 'angular2-toaster';
import {CarsService} from '../../services/cars.service';
import {IFollowedCar} from '../../../assets/models/followed-car.interface';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.scss']
})

export class ClientPanelComponent implements OnInit {
  client: string[];
  cars: ICar[];
  comments: IComment[];
  modal: any;

  clientMock = {
    name: 'Marcin',
    surname: 'Bednarek',
    phoneNumber: '668 895 140',
    email: 'm.bednarek@mail.com',
  };

  constructor(private _clientPanelService: PanelClientService,
              private _workshopService: WorkshopService,
              private modalService: NgbModal,
              private _toasterService: ToasterService,
              private _carService: CarsService) {
    this.cars = [];
  }

  ngOnInit() {
    this.getClient();
    this._workshopService.getUserComments()
      .subscribe((data: IComment[]) => this.comments = data);
    this._carService.getFollowedCars()
      .mergeMap((folCar: IFollowedCar[]) => folCar)
      .switchMap((car: IFollowedCar) =>
        this._carService.getCarByID(car.CarProfileID))
      .subscribe((data: ICar[]) => {
        this.cars = [...this.cars, ...data];
        console.log('------>', this.cars);
      });
  }

  getClient() {
    this._clientPanelService.getClient().subscribe(client => {
      this.client = client;
    });
  }

  open(content) {
    this.modal = this.modalService.open(content);
  }

  saveChanges(name, surname, email, phoneNumber) {
    this.clientMock.name = name;
    this.clientMock.surname = surname;
    this.clientMock.email = email;
    this.clientMock.phoneNumber = phoneNumber;
    this._toasterService.pop('success', 'Changes Saved', 'Your changes in client profile has been successfully saved.');
    this.modal.close();
  }

}
