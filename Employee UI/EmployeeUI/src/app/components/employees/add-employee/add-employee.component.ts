import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest : Employee ={
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(
    private empService : EmployeeService,
    private router : Router    
    ) 
    { }

  ngOnInit() {
  }

  addEmployee() {
    // console.log(this.addEmployeeRequest)
    this.empService.addEmployee(this.addEmployeeRequest)
     .subscribe({
        next : (employee) => {
          console.log(employee)
          this.router.navigate(['/employees'])
        },
        error: (response)=>{
          console.log(response)
        }
        
      });
  }


}
