import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinComponent } from './components/loading-spin/loading-spin.component';
import { LoadingSpinPopupComponent } from './components/loading-spin-popup/loading-spin-popup.component';
import { ConfirmationDialogModalComponent } from './components/confirmation-dialog-modal/confirmation-dialog-modal.component';
import { BulkUploadComponent } from './components/bulk-upload/bulk-upload.component';

@NgModule({
  declarations: [
    LoadingSpinComponent,
    LoadingSpinPopupComponent,
    ConfirmationDialogModalComponent,
    BulkUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinComponent,
    LoadingSpinPopupComponent,
    ConfirmationDialogModalComponent,
    BulkUploadComponent
  ]
})
export class SharedModule { }
