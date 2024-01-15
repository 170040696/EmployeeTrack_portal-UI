// import { Component, OnInit } from '@angular/core';
// import { EmployeserviceService } from '../employeservice.service';
// import { Employe } from '../employe';

// @Component({
//   selector: 'app-get-employeeby-id',
//   templateUrl: './get-employeeby-id.component.html',
//   styleUrls: ['./get-employeeby-id.component.css']
// })
// export class GetEmployeebyIdComponent implements OnInit {
//   employeeId!:number;
//   employeedetails :any | undefined;
//   noemployees!:boolean
//  // employe: Employe = new Employe();
//   constructor(private employeeservice : EmployeserviceService){}

// check : number =0;
//   ngOnInit(): void {

//   }
//   onSubmit()
//   {

//     const employeeIdNumber = Number(this.employeeId);
//     console.log('Employee ID:', employeeIdNumber);
//     this.employeeservice.GetEmployeebyId(employeeIdNumber).subscribe(
//       (data)=>{

//         this.employeedetails = data;
//         // if(this.employeedetails==null)
//         // {this.noemployees=true;this.check=1;}
//         // else{this.noemployees=false;}
//         console.log(this.employeedetails.firstname);
//         console.log(this.noemployees);
//       }
//       ,(error)=>{console.log(error)
//         if (error.status === 404) {
//           this.employeedetails = undefined;
//           this.noemployees = true;
//         }
//       });

//       //if(this.check==1)this.noemployees=true;
//   }

// }



import { Component, OnInit } from '@angular/core';
import { EmployeserviceService } from '../employeservice.service';
import { Employe } from '../employe';

@Component({
  selector: 'app-get-employeeby-id',
  templateUrl: './get-employeeby-id.component.html',
  styleUrls: ['./get-employeeby-id.component.css']
})
export class GetEmployeebyIdComponent implements OnInit {
  employeeId!: number;
  employeedetails: Employe | undefined;
  noemployees: boolean = false;

  constructor(private employeeservice: EmployeserviceService) { }

  ngOnInit(): void { }

  onSubmit() {
    const employeeIdNumber = Number(this.employeeId);
    console.log('Employee ID:', employeeIdNumber);

    this.employeeservice.GetEmployeebyId(employeeIdNumber).subscribe(
      (data: Employe) => {
        this.employeedetails = data;
        this.noemployees = false; // Reset to false if employee is found
      },
      (error) => {
        console.log(error);
        if (error.status === 404) {
          this.employeedetails = undefined;
          this.noemployees = true;
        }
      }
    );
  }
}
