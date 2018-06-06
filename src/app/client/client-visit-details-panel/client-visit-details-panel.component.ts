import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IWorkshop} from '../../../assets/models/workshop.interface';
import {WorkshopService} from '../../services/workshop.service';
import {IComment} from '../../../assets/models/comment.interface';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-client-visit-details-panel',
  templateUrl: './client-visit-details-panel.component.html',
  styleUrls: ['./client-visit-details-panel.component.scss']
})

export class ClientVisitDetailsPanelComponent implements OnInit {

  selectedWorkshop: IWorkshop;
  comments: IComment[];

  constructor(private _activatedRoute: ActivatedRoute, private _workshopService: WorkshopService, private _toasterService: ToasterService) {
  }

  ngOnInit() {
    this.selectedWorkshop = this._activatedRoute.snapshot.data.workshop;
    this._workshopService.getWorkshopComments().subscribe(
      (data: IComment[]) => this.comments = data,
    );
  }


  send() {
    this._toasterService.pop('success', 'Reservation sent', 'Your reservation request has been sent to selected workshop');
  }

  addComent(text: string) {
    let today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = mm + '-' + dd + '-' + yyyy;


    this.comments.push({
      author: 'Marcin Bednarek',
      date: today,
      text: text,
      rating: 5
    });
    this._toasterService.pop('success', 'Comment added!', 'Your comment has been successfully added');
  }
}
