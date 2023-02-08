import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services';
import { User, Role } from '../../../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  user?: User | null;
  title?:any = ' Dashboard'

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }
  ngOnInit(): void {

  }
  logout() {
    this.authenticationService.logout();
  }
}
