import { Customer } from "../customer/customer.class";

export class Order{
    id: number = 0;
    date: string= "";
    description: string= "";
    status: string="New";
    total: number= 0;
   
    customerId: number= 0;
    customer: Customer | null = null;
}