import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeserviceService } from '../employeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employe: Employe = new Employe();
  employeefirstname!: boolean;
  employeelastname!: boolean;
  employeeemailid!: boolean;

  constructor(private Employeservice: EmployeserviceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Employeservice.GetEmployeebyId(this.id).subscribe(data => {
      this.employe = data;
    }, error => console.log(error));
  }

  onSubmit() {
    if (this.employe.firstname != null && this.employe.lastname != null && this.employe.emailid != null
      && this.employe.emailid != "" && this.employe.firstname != "" && this.employe.lastname != "") {
      this.Employeservice.updateEmployee(this.employe, this.id).subscribe(data => {
        console.log(data);
        this.goToEmployeelist();
      }, error => console.log(error));
    } else {
      if (this.employe.firstname == null || this.employe.firstname == "")
        this.employeefirstname = true;
      if (this.employe.lastname == null || this.employe.lastname == "")
        this.employeelastname = true;
      if (this.employe.emailid == null || this.employe.emailid == "")
        this.employeeemailid = true;
    }
  }
  goToEmployeelist() {
    this.router.navigate(['/employees']);
  }
}
