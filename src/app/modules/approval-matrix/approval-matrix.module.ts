import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalMatrixRoutingModule } from './approval-matrix-routing.module';
import { ApprovalMatrixListComponent } from './pages/approval-matrix-list/approval-matrix-list.component';
import { AddUpdateApprovalMatrixComponent } from './components/add-update-approval-matrix/add-update-approval-matrix.component';
import { ViewApprovalMatrixComponent } from './components/view-approval-matrix/view-approval-matrix.component';
import { LoadingSpinPopupComponent } from 'src/app/shared/components/loading-spin-popup/loading-spin-popup.component';
import { LoadingSpinComponent } from 'src/app/shared/components/loading-spin/loading-spin.component';


@NgModule({
  declarations: [
    ApprovalMatrixListComponent,
    AddUpdateApprovalMatrixComponent,
    ViewApprovalMatrixComponent,
    LoadingSpinComponent,
    LoadingSpinPopupComponent
  ],
  imports: [
    CommonModule,
    ApprovalMatrixRoutingModule
  ]
})
export class ApprovalMatrixModule { }
