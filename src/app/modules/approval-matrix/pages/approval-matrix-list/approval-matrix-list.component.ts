import { ChangeDetectorRef, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateApprovalMatrixComponent } from '../../components/add-update-approval-matrix/add-update-approval-matrix.component';

@Component({
  selector: 'app-approval-matrix-list',
  templateUrl: './approval-matrix-list.component.html',
  styleUrls: ['./approval-matrix-list.component.css']
})
export class ApprovalMatrixListComponent {
  isProceess: boolean = true;

  constructor(
    private cd: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private titleService: Title
  ) {
    this.titleService.setTitle("CDC - Approval Matrix List");
  }

  onAdd() {
    this.isProceess = true;
    const modalRef = this.modalService.open(AddUpdateApprovalMatrixComponent, { size: "md" });
    if (modalRef) {
      this.isProceess = false;
    } else {
      this.isProceess = false;
    }
  }
}
