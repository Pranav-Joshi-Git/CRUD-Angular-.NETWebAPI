import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
    .subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.empService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            },
            error: (error) => {
              console.log(error);
            },
          });
        }
      },
    });
  }

  updateEmployee(){
      this.empService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/employees']);
      },
      error: (response)=>{
        console.log(response)
      }
    });
  }

  deleteEmployee(id:string){
    this.empService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/employees']);
      },
      error: (response)=>{
        console.log(response)
      }
    });
  
  }

}
