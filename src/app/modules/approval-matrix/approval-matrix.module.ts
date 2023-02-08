import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalMatrixRoutingModule } from './approval-matrix-routing.module';
import { ApprovalMatrixComponent } from './approval-matrix.component';


@NgModule({
  declarations: [
    ApprovalMatrixComponent
  ],
  imports: [
    CommonModule,
    ApprovalMatrixRoutingModule
  ]
})
export class ApprovalMatrixModule { }
