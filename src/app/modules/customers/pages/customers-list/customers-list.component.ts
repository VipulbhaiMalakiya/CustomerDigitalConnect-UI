import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogModalComponent } from 'src/app/modules/shared/components/confirmation-dialog-modal/confirmation-dialog-modal.component';
import { AddUpdateCustomersComponent } from '../../components/add-update-customers/add-update-customers.component';
import { ViewCustomersComponent } from '../../components/view-customers/view-customers.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

  isProceess: boolean = true;

  constructor(
    private cd: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private titleService: Title
  ) {
    this.titleService.setTitle("CDC - Customers List");
  }

  onAdd() {
    this.isProceess = true;
    const modalRef = this.modalService.open(AddUpdateCustomersComponent, { size: "md" });
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
    const modalRef = this.modalService.open(ViewCustomersComponent, { size: "lg", centered: true, backdrop: "static" });
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
    componentInstance.message = "Are you sure you want to delete this  customer master?";
  }
}
