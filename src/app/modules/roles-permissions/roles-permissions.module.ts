import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';
import { RolesPermissionsComponent } from './roles-permissions.component';


@NgModule({
  declarations: [
    RolesPermissionsComponent
  ],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule
  ]
})
export class RolesPermissionsModule { }
