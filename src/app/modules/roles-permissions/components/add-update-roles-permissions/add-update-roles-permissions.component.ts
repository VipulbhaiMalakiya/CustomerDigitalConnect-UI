import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Roles_Permissions } from 'src/app/_models/master';

@Component({
  selector: 'app-add-update-roles-permissions',
  templateUrl: './add-update-roles-permissions.component.html'
})
export class AddUpdateRolesPermissionsComponent {
  private _rolesPermissionsMaster: Roles_Permissions | undefined;
  isProceess: boolean = true;
  rolesPermissionsMasterForm: any;

  get title(): string {
    return this._rolesPermissionsMaster ? "Edit Roles & Permissions Master" : " Add Roles & Permissions Master";
  }

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.rolesPermissionsMasterForm = this.formBuilder.group({
      Name: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/)]],
      Descirption: ['', [Validators.required]],
      ApiKey: ['', [Validators.required]]
    });
  }

  onCancel() {
    this.activeModal.dismiss();
  }


  onSubmit() {
    if (this.rolesPermissionsMasterForm.valid) {
      console.log(this.rolesPermissionsMasterForm.value);

      // this.activeModal.close(this.companyMasterForm.value)
    } else {
      this.rolesPermissionsMasterForm.controls['Name'].markAsTouched();
      this.rolesPermissionsMasterForm.controls['Descirption'].markAsTouched();
      this.rolesPermissionsMasterForm.controls['ApiKey'].markAsTouched();
    }
  }

  shouldShowError(controlName: string, errorName: string) {
    return this.rolesPermissionsMasterForm.controls[controlName].touched && this.rolesPermissionsMasterForm.controls[controlName].hasError(errorName);
  }
}
