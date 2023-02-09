import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../../../_models';
import { UserService } from '../../../../_api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
  loading = false;
  users: User[] = [];

  constructor(private userService: UserService, private titleService: Title,) {
    this.titleService.setTitle("CDC - Admin Dashboard");
  }

  ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
  }
}
