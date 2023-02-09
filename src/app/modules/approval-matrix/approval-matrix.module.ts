import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalMatrixRoutingModule } from './approval-matrix-routing.module';
import { ApprovalMatrixListComponent } from './pages/approval-matrix-list/approval-matrix-list.component';


@NgModule({
  declarations: [
    ApprovalMatrixListComponent
  ],
  imports: [
    CommonModule,
    ApprovalMatrixRoutingModule
  ]
})
export class ApprovalMatrixModule { }
