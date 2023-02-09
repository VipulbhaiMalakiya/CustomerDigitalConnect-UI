import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services';
import { User, Role } from '../../../_models';

@Component({
  selector: 'app-left-mainmenu',
  templateUrl: './left-mainmenu.component.html'
})
export class LeftMainmenuComponent implements OnInit {
  user?: User | null;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }
  ngOnInit(): void {

  }

  get isAdmin() {
    return this.user?.role === Role.Admin;
  }
}
