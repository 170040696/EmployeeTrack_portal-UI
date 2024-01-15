import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { GetEmployeebyIdComponent } from './get-employeeby-id/get-employeeby-id.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'employees', component:EmployeeListComponent},
  {path:'', component:HomepageComponent},
 // {path:'', redirectTo:'employees',pathMatch:'full'},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'Get-employeebyId',component:GetEmployeebyIdComponent},
  {path:'update-employees/:id',component:UpdateEmployeeComponent},
  {path:'employeedetails/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
