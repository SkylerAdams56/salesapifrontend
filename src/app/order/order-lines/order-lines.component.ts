import { Component } from '@angular/core';
import { Order } from '../order.class';
import { SystemService } from 'src/app/system/system.service';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { Orderline } from 'src/app/orderline/orderline.class';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent {

  pageTitle = "Order Lines";
  order!: Order;
  constructor(
    private sys: SystemService,
    private ordSvc: OrderService,
    private route: ActivatedRoute
  ) {}

  review():void{

  }

  remove(orderline: Orderline){
    
  }

  ngOnInit():void{
    let id = this.route.snapshot.params["id"];
    this.ordSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Order:",res);
        this.order = res;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

}
