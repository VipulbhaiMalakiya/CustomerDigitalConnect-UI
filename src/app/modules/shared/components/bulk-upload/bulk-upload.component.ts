import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html'
})
export class BulkUploadComponent {

  constructor(private activeModal: NgbActiveModal) { }
  onCancel() {
    this.activeModal.close(false);
  }
}
