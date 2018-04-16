import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-workshop-panel',
  templateUrl: './workshop-panel.component.html',
  styleUrls: ['./workshop-panel.component.scss']
})

export class WorkshopPanelComponent {

  constructor(private _loginService: LoginService, private _router: Router) {
  }
}
