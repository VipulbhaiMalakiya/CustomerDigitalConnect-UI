import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMasterRoutingModule } from './user-master-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserMasterRoutingModule
  ]
})
export class UserMasterModule { }
