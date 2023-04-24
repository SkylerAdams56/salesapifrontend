import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.class';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {


  pageTitle = "Employee List";
  employees: Employee[] = [];
  constructor(
    private emplSvc: EmployeeService
  ) {}

  ngOnInit(): void {
    this.emplSvc.list().subscribe({
      next: (res) => {
        console.debug("Employees:", res);
        this.employees = res;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }
}
