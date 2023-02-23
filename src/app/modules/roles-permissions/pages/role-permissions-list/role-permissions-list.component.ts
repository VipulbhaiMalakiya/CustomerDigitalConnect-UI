import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogModalComponent } from 'src/app/modules/shared/components/confirmation-dialog-modal/confirmation-dialog-modal.component';
import { AddUpdateRolesPermissionsComponent } from '../../components/add-update-roles-permissions/add-update-roles-permissions.component';
import { ViewRolesPermissionsComponent } from '../../components/view-roles-permissions/view-roles-permissions.component';

@Component({
  selector: 'app-role-permissions-list',
  templateUrl: './role-permissions-list.component.html'
})
export class RolePermissionsListComponent implements OnInit{
  isProceess: boolean = true;

  constructor(
    private cd: ChangeDetectorRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private titleService: Title
  ) {
    this.titleService.setTitle("CDC - Role & Permissions List");
  }

  onAdd() {
    this.isProceess = true;
    const modalRef = this.modalService.open(AddUpdateRolesPermissionsComponent, { size: "md" });
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
    const modalRef = this.modalService.open(ViewRolesPermissionsComponent, { size: "lg", centered: true, backdrop: "static" });
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
    componentInstance.message = "Are you sure you want to role & permission this  customer master?";
  }

}
