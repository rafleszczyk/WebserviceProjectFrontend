import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IWorkshop} from '../../../assets/models/workshop.interface';

@Component({
  selector: 'app-client-visit-details-panel',
  templateUrl: './client-visit-details-panel.component.html',
  styleUrls: ['./client-visit-details-panel.component.scss']
})

export class ClientVisitDetailsPanelComponent implements OnInit {

  selectedWorkshop: IWorkshop;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.selectedWorkshop = this._activatedRoute.snapshot.data.workshop;
  }

}
