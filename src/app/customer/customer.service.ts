import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseurl= "http://localhost:2000/api/customers";
  
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Customer[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Customer[]>;
  }
}
