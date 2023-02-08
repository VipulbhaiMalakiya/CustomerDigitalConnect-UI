import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefoultComponent } from './_layouts/defoult/defoult.component';
import { LoginComponent } from './_layouts/login/login.component';
import { AuthGuard } from './_helpers';
import { ForgotPasswordComponent } from './_layouts/forgot-password/forgot-password.component';
import { SignUpComponent } from './_layouts/sign-up/sign-up.component';
import { Role } from './_models';
const routes: Routes = [
  {
    path: '',
    component: DefoultComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }

    ]
  },
  {
    path: 'admin',
    component: DefoultComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    children: [
      {
        path: "master",
        children: [
          { path: 'company', loadChildren: () => import('./modules/company-master/company-master.module').then(m => m.CompanyMasterModule) },
          { path: 'department', loadChildren: () => import('./modules/department-master/department-master.module').then(m => m.DepartmentMasterModule) },
          { path: 'user', loadChildren: () => import('./modules/user-master/user-master.module').then(m => m.UserMasterModule) },
          { path: 'roles-permissions', loadChildren: () => import('./modules/roles-permissions/roles-permissions.module').then(m => m.RolesPermissionsModule) },
          { path: 'approval-matrix', loadChildren: () => import('./modules/approval-matrix/approval-matrix.module').then(m => m.ApprovalMatrixModule) },
          { path: 'customers', loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },

    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


