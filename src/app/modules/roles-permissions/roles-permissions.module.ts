import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';
import { RolePermissionsListComponent } from './pages/role-permissions-list/role-permissions-list.component';
import { AddUpdateRolesPermissionsComponent } from './components/add-update-roles-permissions/add-update-roles-permissions.component';
import { ViewRolesPermissionsComponent } from './components/view-roles-permissions/view-roles-permissions.component';
import { LoadingSpinPopupComponent } from 'src/app/shared/components/loading-spin-popup/loading-spin-popup.component';
import { LoadingSpinComponent } from 'src/app/shared/components/loading-spin/loading-spin.component';


@NgModule({
  declarations: [
    RolePermissionsListComponent,
    AddUpdateRolesPermissionsComponent,
    ViewRolesPermissionsComponent,
    LoadingSpinComponent,
    LoadingSpinPopupComponent
  ],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule
  ]
})
export class RolesPermissionsModule { }
