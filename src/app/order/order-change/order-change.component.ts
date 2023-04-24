import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.class';

@Component({
  selector: 'app-order-change',
  templateUrl: './order-change.component.html',
  styleUrls: ['./order-change.component.css']
})
export class OrderChangeComponent {
  order!: Order;
  pageTitle = "Order Change";


    constructor(
    private ordSvc : OrderService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  save(): void{
    this.ordSvc.change(this.order).subscribe({
      next: (res) => {
        console.debug("Order Changed!");
        this.router.navigateByUrl("/order/list");
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  ngOnInit():void{
    let id = this.route.snapshot.params["id"];
    this.ordSvc.get(id).subscribe({
      next: (res)=>{
        console.debug("Order:", res);
        this.order = res;
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }
}
