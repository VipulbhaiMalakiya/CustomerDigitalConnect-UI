import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentMasterRoutingModule } from './department-master-routing.module';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { ViewDepartmentMasterComponent } from './components/view-department-master/view-department-master.component';
import { AddEditeDepartmentMasterComponent } from './components/add-edite-department-master/add-edite-department-master.component';
@NgModule({
  declarations: [
    DepartmentListComponent,
    ViewDepartmentMasterComponent,
    AddEditeDepartmentMasterComponent
  ],
  imports: [
    CommonModule,
    DepartmentMasterRoutingModule
  ]
})
export class DepartmentMasterModule { }
