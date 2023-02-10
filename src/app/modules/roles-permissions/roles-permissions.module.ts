import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';
import { RolePermissionsListComponent } from './pages/role-permissions-list/role-permissions-list.component';
import { AddUpdateRolesPermissionsComponent } from './components/add-update-roles-permissions/add-update-roles-permissions.component';
import { ViewRolesPermissionsComponent } from './components/view-roles-permissions/view-roles-permissions.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RolePermissionsListComponent,
    AddUpdateRolesPermissionsComponent,
    ViewRolesPermissionsComponent,
  ],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule,
    SharedModule
  ]
})
export class RolesPermissionsModule { }
