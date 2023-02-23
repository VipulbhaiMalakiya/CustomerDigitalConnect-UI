import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-roles-permissions',
  templateUrl: './view-roles-permissions.component.html'
})
export class ViewRolesPermissionsComponent {
  isProceess:boolean= true;
  constructor(private activeModal: NgbActiveModal) { }

  onCancel() {
    this.activeModal.close(false);
  }
}
