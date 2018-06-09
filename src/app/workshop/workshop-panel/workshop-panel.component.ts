import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {IWorkshop} from '../../../assets/models/workshop.interface';
import {WorkshopService} from '../../services/workshop.service';
import 'rxjs/add/operator/shareReplay';
import {IComment} from '../../../assets/models/comment.interface';

@Component({
  selector: 'app-workshop-panel',
  templateUrl: './workshop-panel.component.html',
  styleUrls: ['./workshop-panel.component.scss']
})

export class WorkshopPanelComponent implements OnInit {

  myWorkshop: IWorkshop;
  commentsCollection: IComment[];

  constructor(private _router: Router,
              private _loginService: LoginService,
              private _workshopService: WorkshopService) {
  }

  ngOnInit() {
    this.myWorkshop = {
      Latitude: 51.84056,
      Longtitude: 16.59621,
      WorkshopAddressCity: 'Leszno',
      WorkshopAddressStreet: 'Jana Dekana 6',
      WorkshopAddressZipCode: '64-100',
      WorkshopAverageRating: 5,
      WorkshopDescription: 'We can fix your car.',
      WorkshopEmailAddress: 'autoserwisleszno@op.pl',
      WorkshopID: 10,
      WorkshopLogoURL: '',
      WorkshopNIP: '7829385672',
      WorkshopName: 'AutoSerwis',
      WorkshopPhoneNumber: '657895554',
      WorkshopURL: 'serwissamochodowyleszno.com.pl',
    };
    this._workshopService.getWorkshopComments().subscribe(
      (data: IComment[]) => this.commentsCollection = data,
    );
  }
}
