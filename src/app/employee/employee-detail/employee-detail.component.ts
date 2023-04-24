import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {


  employee!: Employee;
  pageTitle ="Employee Detail";
  showVerifyRemove: boolean= false;

  constructor(
    private emplSvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove():void{
    this.showVerifyRemove = !this.showVerifyRemove;
  }
  
  removeVerified():void{
    this.emplSvc.remove(this.employee.id).subscribe({
      next: (res) => {
        console.debug("Employee Removed!");
        this.router.navigateByUrl("/employee/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit():void{
    let id = Number(this.route.snapshot.params["id"]);
    this.emplSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Employee:",res);
        this.employee = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
