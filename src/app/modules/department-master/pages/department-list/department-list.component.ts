import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogModalComponent } from 'src/app/modules/shared/components/confirmation-dialog-modal/confirmation-dialog-modal.component';
import { AddEditeDepartmentMasterComponent } from '../../components/add-edite-department-master/add-edite-department-master.component';
import { ViewDepartmentMasterComponent } from '../../components/view-department-master/view-department-master.component';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html'
})
export class DepartmentListComponent implements OnInit{

  isProceess: boolean = true;

  constructor(
    private cd: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private titleService: Title
  ) {
    this.titleService.setTitle("CDC - Department List");
  }
  onAdd() {
    this.isProceess = true;
    const modalRef = this.modalService.open(AddEditeDepartmentMasterComponent, { size: "md" });
    if (modalRef) {
      this.isProceess = false;
    } else {
      this.isProceess = false;
    }
  }

  ngOnInit(): void {
    this.isProceess = false;
  }

  onViewDetail() {
    this.isProceess = true;
    const modalRef = this.modalService.open(ViewDepartmentMasterComponent, { size: "lg", centered: true, backdrop: "static" });
    if (modalRef) {
      this.isProceess = false;
    } else {
      this.isProceess = false;
    }
  }

  onDelete() {
    this.isProceess = true;
    const modalRef = this.modalService.open(ConfirmationDialogModalComponent, { size: "sm", centered: true, backdrop: "static" });
    if (modalRef) {
      this.isProceess = false;
    }
    else {
      this.isProceess = false;
    }
    var componentInstance = modalRef.componentInstance as ConfirmationDialogModalComponent;
    componentInstance.message = "Are you sure you want to delete this department master?";
  }
}
