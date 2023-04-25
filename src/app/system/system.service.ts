import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInEmployee: Employee | null = null;

  constructor(
    private router: Router
  ) { }

  chkLogin(): void{
    if(this.loggedInEmployee === null){
      this.router.navigateByUrl("/employee/login");
    }
  }
}
