import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../../../_models';
import { AuthenticationService } from '../../../../_services';
import { UserService } from '../../../../_api';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  loading = false;
  user: User;
  userFromApi?: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private titleService: Title,
  ) {
    this.user = <User>this.authenticationService.userValue;
    this.titleService.setTitle("CDC - Dashboard");
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
  }
}
