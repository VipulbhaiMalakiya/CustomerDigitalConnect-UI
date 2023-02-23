import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-department-master',
  templateUrl: './view-department-master.component.html'
})
export class ViewDepartmentMasterComponent {
  isProceess:boolean= true;
  constructor(private activeModal: NgbActiveModal) { }

  onCancel() {
    this.activeModal.close(false);
  }
}
