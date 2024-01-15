import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeserviceService } from '../employeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employ: Employe[] = [];
  filtereddata: Employe[] = [];
  searchforfirstname: string = '';
  searchforlastname: string = '';
  searchforemailid: string = '';
  constructor(private employeservice: EmployeserviceService, private router: Router) { }
  ngOnInit(): void {

    this.getemployees();
  }
  private getemployees() {
    this.employeservice.GetEmployeesList().subscribe(data => {
      console.log('Component initialized!');
      this.employ = data;
      this.filtereddata = data;
    })
  }
  updateemploy(id: number) {
    this.router.navigate(['update-employees', id]);
  }
  Deleteemploy(id: number) {
    this.employeservice.Deleteemployee(id).subscribe(data => {
      this.getemployees();
    })
  }
  Viewemploy(id: number) {
    this.router.navigate(['employeedetails', id]);
  }
  applyFilter(): any {
    this.filtereddata = this.employ
      .filter(employe => employe.firstname.toLowerCase().includes(this.searchforfirstname.toLowerCase()))
      .filter(Employe => Employe.lastname.toLowerCase().includes(this.searchforlastname.toLowerCase()))
      .filter(Employe => Employe.emailid.toLowerCase().includes(this.searchforemailid.toLowerCase()));
  }
}


