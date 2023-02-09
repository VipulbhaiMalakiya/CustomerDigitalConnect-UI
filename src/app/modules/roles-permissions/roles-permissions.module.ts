import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';
import { RolePermissionsListComponent } from './pages/role-permissions-list/role-permissions-list.component';


@NgModule({
  declarations: [
    RolePermissionsListComponent
  ],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule
  ]
})
export class RolesPermissionsModule { }
