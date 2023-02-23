import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html'
})
export class ViewUserComponent {
  isProceess:boolean= true;
  constructor(private activeModal: NgbActiveModal) { }

  onCancel() {
    this.activeModal.close(false);
  }
}
