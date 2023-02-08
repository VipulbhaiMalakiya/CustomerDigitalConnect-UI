import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMasterRoutingModule } from './user-master-routing.module';
import { UserMasterComponent } from './user-master.component';


@NgModule({
  declarations: [
    UserMasterComponent
  ],
  imports: [
    CommonModule,
    UserMasterRoutingModule
  ]
})
export class UserMasterModule { }
