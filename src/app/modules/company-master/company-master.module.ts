import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyMasterRoutingModule } from './company-master-routing.module';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { ViewCompanyComponent } from './components/view-company/view-company.component';
import { AddEditeCompanyComponent } from './components/add-edite-company/add-edite-company.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompanyListComponent,
    ViewCompanyComponent,
    AddEditeCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyMasterRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanyMasterModule { }
