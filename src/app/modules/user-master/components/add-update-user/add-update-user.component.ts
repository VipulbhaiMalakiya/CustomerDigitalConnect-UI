import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html'
})
export class AddUpdateUserComponent {
  private _userMaster: User | undefined;
  isProceess: boolean = true;
  userMasterMasterForm: any;

  get title(): string {
    return this._userMaster ? "Edit User Master" : " Add User Master";
  }

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.userMasterMasterForm = this.formBuilder.group({
      Name: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/)]],
      Descirption: ['', [Validators.required]],
      ApiKey: ['', [Validators.required]]
    });
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    if (this.userMasterMasterForm.valid) {
      console.log(this.userMasterMasterForm.value);

      // this.activeModal.close(this.companyMasterForm.value)
    } else {
      this.userMasterMasterForm.controls['Name'].markAsTouched();
      this.userMasterMasterForm.controls['Descirption'].markAsTouched();
      this.userMasterMasterForm.controls['ApiKey'].markAsTouched();
    }
  }

  shouldShowError(controlName: string, errorName: string) {
    return this.userMasterMasterForm.controls[controlName].touched && this.userMasterMasterForm.controls[controlName].hasError(errorName);
  }
}
