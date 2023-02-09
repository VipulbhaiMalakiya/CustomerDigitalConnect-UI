import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html'
})
export class ViewCompanyComponent {
  isProceess:boolean= true;
  constructor(private activeModal: NgbActiveModal) { }

  onCancel() {
    this.activeModal.close(false);
  }
}
