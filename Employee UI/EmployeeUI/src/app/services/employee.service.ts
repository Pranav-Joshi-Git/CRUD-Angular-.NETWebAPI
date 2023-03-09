import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  BaseApiUrl: string = 'https://localhost:7023'

  constructor(private http: HttpClient ) { }

  getAllEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.BaseApiUrl + '/api/employee');
  }

  addEmployee(addEmployeeRequest:Employee) : Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>(this.BaseApiUrl + '/api/employee', addEmployeeRequest)
  }

  getEmployee(id:string) : Observable<Employee> {
    return this.http.get<Employee>(this.BaseApiUrl + '/api/employee/' + id)
  }

  updateEmployee(id:string, updateEmployeeRequest:Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.BaseApiUrl + '/api/employee/' + id, updateEmployeeRequest)
  }

  deleteEmployee(id:string) : Observable<Employee>{
    return this.http.delete<Employee>(this.BaseApiUrl + '/api/employee/' + id)
  }
}
