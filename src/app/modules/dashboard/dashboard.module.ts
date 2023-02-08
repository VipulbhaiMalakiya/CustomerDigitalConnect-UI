import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
