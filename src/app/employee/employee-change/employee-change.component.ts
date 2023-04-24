import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';

@Component({
  selector: 'app-employee-change',
  templateUrl: './employee-change.component.html',
  styleUrls: ['./employee-change.component.css']
})
export class EmployeeChangeComponent {

  employee!: Employee;
  pageTitle = "Employee Change";


    constructor(
    private emplSvc : EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  save(): void{
    this.emplSvc.change(this.employee).subscribe({
      next: (res) => {
        console.debug("Employee Changed!");
        this.router.navigateByUrl("/employee/list");
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  ngOnInit():void{
    let id = this.route.snapshot.params["id"];
    this.emplSvc.get(id).subscribe({
      next: (res)=>{
        console.debug("Employee:", res);
        this.employee = res;
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }
}
