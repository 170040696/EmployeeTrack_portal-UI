import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { GetEmployeebyIdComponent } from './get-employeeby-id/get-employeeby-id.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
 // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },

  {
    path: 'home',
    component: HomepageComponent,
    children: [
      { path: 'employees', component: EmployeeListComponent },
      { path: 'create-employee', component: CreateEmployeeComponent },
      { path: 'get-employee-by-id', component: GetEmployeebyIdComponent },
      { path: 'update-employees/:id', component: UpdateEmployeeComponent },
      { path: 'employee-details/:id', component: EmployeeDetailsComponent },
      { path: '', redirectTo: 'employees', pathMatch: 'full' } // default to employees list
    ]
  },

  { path: '**', redirectTo: 'login' } // fallback for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
