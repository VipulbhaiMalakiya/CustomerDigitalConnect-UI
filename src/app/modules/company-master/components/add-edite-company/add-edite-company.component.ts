import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyMaster } from 'src/app/_models/master';

@Component({
  selector: 'app-add-edite-company',
  templateUrl: './add-edite-company.component.html',
  styleUrls: ['./add-edite-company.component.css']
})
export class AddEditeCompanyComponent {
  private _companyMaster: CompanyMaster | undefined;
  isProceess: boolean = true;
  companyMasterForm: any;

  get title(): string {
    return this._companyMaster ? "Edit Company Master" : " Add Company Master";
  }

  set CompanyMaster(value: CompanyMaster) {
    this._companyMaster = value;
    if (this._companyMaster) {
      this.companyMasterForm.patchValue({
        Name: this._companyMaster.Name,
        Descirption: this._companyMaster.Descirption,
        ApiKey: this._companyMaster.ApiKey,
      });
      this.cd.detectChanges();
    }
  }

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.companyMasterForm = this.formBuilder.group({
      Name: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/)]],
      Descirption: ['', [Validators.required]],
      ApiKey: ['', [Validators.required]]
    });
  }

  onCancel() {
    this.activeModal.dismiss();
  }


  onSubmit() {
    if (this.companyMasterForm.valid) {
      console.log(this.companyMasterForm.value);

      // this.activeModal.close(this.companyMasterForm.value)
    } else {
      this.companyMasterForm.controls['Name'].markAsTouched();
      this.companyMasterForm.controls['Descirption'].markAsTouched();
      this.companyMasterForm.controls['ApiKey'].markAsTouched();
    }
  }

  shouldShowError(controlName: string, errorName: string) {
    return this.companyMasterForm.controls[controlName].touched && this.companyMasterForm.controls[controlName].hasError(errorName);
  }
}
