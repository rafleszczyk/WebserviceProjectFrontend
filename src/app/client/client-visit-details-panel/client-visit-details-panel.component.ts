import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IWorkshop} from '../../../assets/models/workshop.interface';
import {WorkshopService} from '../../services/workshop.service';
import {IComment} from '../../../assets/models/comment.interface';

@Component({
  selector: 'app-client-visit-details-panel',
  templateUrl: './client-visit-details-panel.component.html',
  styleUrls: ['./client-visit-details-panel.component.scss']
})

export class ClientVisitDetailsPanelComponent implements OnInit {

  selectedWorkshop: IWorkshop;
  comments: IComment[];

  constructor(private _activatedRoute: ActivatedRoute, private _workshopService: WorkshopService) {}

  ngOnInit() {
    this.selectedWorkshop = this._activatedRoute.snapshot.data.workshop;
    this._workshopService.getWorkshopComments().subscribe(
      (data: IComment[]) => this.comments = data,
    );
  }

}
