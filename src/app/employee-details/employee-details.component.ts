import { Component, OnInit } from '@angular/core';
import { EmployeserviceService } from '../employeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../employe';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employe: Employe = new Employe();
  constructor(private Employeservice: EmployeserviceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Employeservice.GetEmployeebyId(this.id).subscribe(data => {
      this.employe = data;
    }, error => console.log(error));
  }
  onSubmit() {
    //console.log(this.employe);
    this.router.navigate(['/employees']);
  }
}
