import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../_services/index';
import { PasswordStrengthValidator } from "./../../shared/directives/password-strength.validators"
import { Title } from '@angular/platform-browser';
import { EncrDecrService } from 'src/app/_services/encr-decr.service';
import { environment } from '../../../environments/environment';
@Component({ templateUrl: 'login.component.html' })
export class LoginComponent {
  loading = false;
  error = '';
  loginForm: any;
  public showPassword: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private titleService: Title,
    private EncrDecr: EncrDecrService
  ) {

    this.titleService.setTitle("CDC - Login");
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

      // username: [null, Validators.compose([Validators.required, Validators.email])],
      // password: [null, Validators.compose([ Validators.required, PasswordStrengthValidator])]
    })
  }
  toggleFieldTextType() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.controls['username'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
      return
    }
    this.loading = true;
    let encrypted = {
      username: this.EncrDecr.set(environment.EncryptKey, this.loginForm.value.username).trim(),
      password: this.EncrDecr.set(environment.EncryptKey, this.loginForm.value.password).trim()
    }

    let decrypted = {
      username: this.EncrDecr.get(environment.EncryptKey, encrypted.username).trim(),
      password: this.EncrDecr.get(environment.EncryptKey, encrypted.password).trim()
    }

    this.authenticationService.login(decrypted.username, decrypted.password)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);;
          this.toastr.success("You are successfully logged in!");
        },
        error: error => {
          this.error = error;
          this.loading = false;
          this.toastr.error(this.error);
        }
      });
  }

  shouldShowError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].touched && this.loginForm.controls[controlName].hasError(errorName);
  }


}
