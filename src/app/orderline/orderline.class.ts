import { Item } from "../item/item.class";
import { Order } from "../order/order.class";

export class Orderline{
    id: number = 0;
    quantity: number = 0;
    
    orderId: number = 0;
    order: Order | null = null;

    itemId: number = 0;
    item: Item | null = null;
}