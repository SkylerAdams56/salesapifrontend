import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  order!: Order;
  pageTitle ="Order Detail";
  showVerifyRemove: boolean= false;

  constructor(
    private ordSvc: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove():void{
    this.showVerifyRemove = !this.showVerifyRemove;
  }
  
  removeVerified():void{
    this.ordSvc.remove(this.order.id).subscribe({
      next: (res) => {
        console.debug("Order Removed!");
        this.router.navigateByUrl("/order/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit():void{
    let id = Number(this.route.snapshot.params["id"]);
    this.ordSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Order:",res);
        this.order = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
