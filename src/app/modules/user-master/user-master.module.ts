import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMasterRoutingModule } from './user-master-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AddUpdateUserComponent } from './components/add-update-user/add-update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    AddUpdateUserComponent,
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    UserMasterRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserMasterModule { }
