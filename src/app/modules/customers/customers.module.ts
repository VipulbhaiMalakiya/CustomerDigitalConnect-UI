import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { AddUpdateCustomersComponent } from './components/add-update-customers/add-update-customers.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';

@NgModule({
  declarations: [
    CustomersListComponent,
    AddUpdateCustomersComponent,
    ViewCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
