import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeserviceService } from '../employeservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employe: Employe = new Employe();
  constructor(private employeeservice: EmployeserviceService, private router: Router) { }

  employeefirstname: boolean | undefined
  employeelastname: boolean | undefined
  employeeemailid: boolean | undefined
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  saveEmployee() {
    if (this.employe.firstname != null && this.employe.lastname != null && this.employe.emailid != null) {
      this.employeeservice.createEmployee(this.employe).subscribe(data => {
        console.log(data);
        console.log("in save employee");

        this.goToEmployeelist();
      },
        error => console.log(error));
    } else {
      if (this.employe.firstname == null)
        this.employeefirstname = true;
      if (this.employe.lastname == null)
        this.employeelastname = true;
      if (this.employe.emailid == null)
        this.employeeemailid = true;

    }
  }
  goToEmployeelist() {
    this.router.navigate(['/employees']);
  }
  onSubmit() {
    //console.log(this.employe);
    this.saveEmployee();
  }

}
