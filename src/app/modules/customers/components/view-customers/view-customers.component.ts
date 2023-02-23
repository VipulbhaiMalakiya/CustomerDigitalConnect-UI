import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html'
})
export class ViewCustomersComponent {
  isProceess:boolean= true;
  constructor(private activeModal: NgbActiveModal) { }

  onCancel() {
    this.activeModal.close(false);
  }
}
