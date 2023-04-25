import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.class';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/customer.class';

@Component({
  selector: 'app-order-change',
  templateUrl: './order-change.component.html',
  styleUrls: ['./order-change.component.css']
})
export class OrderChangeComponent {
  order!: Order;
  pageTitle = "Order Change";
  customers!: Customer[];

    constructor(
    private ordSvc : OrderService,
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  save(): void{
    this.order.customerId = +this.order.customerId;
    console.debug("B4:", this.order);
    this.ordSvc.change(this.order).subscribe({
      next: (res) => {
        console.debug("Order Changed!");
        this.router.navigateByUrl("/order/list");
      },
      error: (err) =>{
        console.error(err);
      }
    });
  } 
  ngOnInit():void{
    this.custSvc.list().subscribe({
      next: (res)=>{
        console.debug("Order:", res);
        this.customers = res;
      },
      error:(err)=>{
        console.error(err);
    }
  });
    let id = this.route.snapshot.params["id"];
    this.ordSvc.get(id).subscribe({
      next: (res)=>{
        console.debug("Order:", res);
        this.order = res;
        this.order.date = this.order.date.substring(0,10);
      },
      error:(err)=>{
        console.error(err);
      }
    });
  }
}
