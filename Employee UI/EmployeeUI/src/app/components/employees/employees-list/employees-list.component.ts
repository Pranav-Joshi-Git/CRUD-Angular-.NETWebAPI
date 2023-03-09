import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
    

  constructor(
    private empService : EmployeeService,
    private router : Router
    ) 
  { }

  ngOnInit(): void {
    this.empService.getAllEmployees()
    .subscribe({
      next : (employees) =>{
        this.employees = employees;
      },
      error: (response)=>{
        console.log(response)
      }
    })    
  }
  GoToAddEmployee(this: any) {
    this.router.navigate(['employees/add'])
  }

}






