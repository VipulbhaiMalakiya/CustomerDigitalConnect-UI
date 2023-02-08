import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalMatrixComponent } from './approval-matrix.component';

const routes: Routes = [{ path: '', component: ApprovalMatrixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalMatrixRoutingModule { }
