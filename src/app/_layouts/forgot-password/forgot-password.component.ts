import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

  forgotPasswordForm: any;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private titleService: Title,
  ) {
    this.titleService.setTitle("Avataara - Forgot-Password");
    this.forgotPasswordForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required, Validators.email])],
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.controls['username'].markAsTouched();
      return
    }
    this.loading = true;
    return
    // this.authenticationService.forgotpassword(this.forgotPasswordForm.value)
    //   .subscribe({
    //     next: () => {
    //       // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //       // this.router.navigate([returnUrl]);;
    //       // this.toastr.success("You are successfully logged in!");
    //     },
    //     error: error => {
    //       this.error = error;
    //       this.loading = false;
    //       this.toastr.error(this.error);
    //     }
    //   });
  }

  shouldShowError(controlName: string, errorName: string) {
    return this.forgotPasswordForm.controls[controlName].touched && this.forgotPasswordForm.controls[controlName].hasError(errorName);
  }
}
