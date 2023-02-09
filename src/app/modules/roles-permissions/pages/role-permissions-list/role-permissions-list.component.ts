import { ChangeDetectorRef, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateRolesPermissionsComponent } from '../../components/add-update-roles-permissions/add-update-roles-permissions.component';

@Component({
  selector: 'app-role-permissions-list',
  templateUrl: './role-permissions-list.component.html'
})
export class RolePermissionsListComponent {
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
}
