import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customers } from 'src/app/_models/master';

@Component({
  selector: 'app-add-update-customers',
  templateUrl: './add-update-customers.component.html'
})
export class AddUpdateCustomersComponent {
  private _customersMaster: Customers | undefined;
  isProceess: boolean = true;
  customersMasterForm: any;

  get title(): string {
    return this._customersMaster ? "Edit Customer Master" : " Add Customer Master";
  }

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.customersMasterForm = this.formBuilder.group({
      // Name: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/)]],
      // Descirption: ['', [Validators.required]],
      // ApiKey: ['', [Validators.required]]
    });
  }

  onCancel() {
    this.activeModal.dismiss();
  }
}
