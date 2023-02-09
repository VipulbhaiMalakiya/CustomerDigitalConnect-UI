import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Department } from 'src/app/_models/master';

@Component({
  selector: 'app-add-edite-department-master',
  templateUrl: './add-edite-department-master.component.html'
})
export class AddEditeDepartmentMasterComponent {
  private _departmentMaster: Department | undefined;
  isProceess: boolean = true;
  departmentMasterForm: any;

  get title(): string {
    return this._departmentMaster ? "Edit Department Master" : " Add Department Master";
  }

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.departmentMasterForm = this.formBuilder.group({
      // Name: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/)]],
      // Descirption: ['', [Validators.required]],
      // ApiKey: ['', [Validators.required]]
    });
  }

  onCancel() {
    this.activeModal.dismiss();
  }
}
