import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { AddUpdateCustomersComponent } from './components/add-update-customers/add-update-customers.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { LoadingSpinPopupComponent } from 'src/app/shared/components/loading-spin-popup/loading-spin-popup.component';
import { LoadingSpinComponent } from 'src/app/shared/components/loading-spin/loading-spin.component';

@NgModule({
  declarations: [
    CustomersListComponent,
    AddUpdateCustomersComponent,
    ViewCustomersComponent,
    LoadingSpinComponent,
    LoadingSpinPopupComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
