import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { AddUpdateCustomersComponent } from './components/add-update-customers/add-update-customers.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomersListComponent,
    AddUpdateCustomersComponent,
    ViewCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
