import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginLeftsideComponent } from './components/login-leftside/login-leftside.component';
import { GoogleAccountComponent } from './components/google-account/google-account.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftMainmenuComponent } from './components/left-mainmenu/left-mainmenu.component';
import { ConfirmationDialogModalComponent } from './components/confirmation-dialog-modal/confirmation-dialog-modal.component';
@NgModule({
  declarations: [
    HeaderComponent,
    LoginLeftsideComponent,
    GoogleAccountComponent,
    LeftMainmenuComponent,
    ConfirmationDialogModalComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  exports:[
    HeaderComponent,
    LoginLeftsideComponent,
    GoogleAccountComponent,
    AppRoutingModule,
    LeftMainmenuComponent,
    NgbModule,
    ConfirmationDialogModalComponent
  ]
})
export class SharedModule { }
