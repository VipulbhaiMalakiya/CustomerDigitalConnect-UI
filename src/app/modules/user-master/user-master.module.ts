import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMasterRoutingModule } from './user-master-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AddUpdateUserComponent } from './components/add-update-user/add-update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { LoadingSpinPopupComponent } from 'src/app/shared/components/loading-spin-popup/loading-spin-popup.component';
import { LoadingSpinComponent } from 'src/app/shared/components/loading-spin/loading-spin.component';

@NgModule({
  declarations: [
    UserListComponent,
    AddUpdateUserComponent,
    ViewUserComponent,
    LoadingSpinComponent,
    LoadingSpinPopupComponent
  ],
  imports: [
    CommonModule,
    UserMasterRoutingModule
  ]
})
export class UserMasterModule { }
