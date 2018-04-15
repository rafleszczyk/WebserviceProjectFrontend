import {Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import {IWorkshop} from '../../../assets/models/workshop.interface';
import {WorkshopService} from '../../services/workshop.service';

@Injectable()
export class SelectedWorkshopResolver implements Resolve<Observable<IWorkshop>> {
  constructor(private _workshopService: WorkshopService, private _router: Router) {
  }

  resolve() {
    return Observable.of(this._workshopService.getWorkshop())
      .first()
      .do((data) => {
        if (!data) this._router.navigate(['home/client/visit']);
      });
  }
}
