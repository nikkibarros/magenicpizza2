import { Delivery } from './delivery';
import { Order } from './order';

export class OrderSummary {
    orders: Order[];
    delivery: Delivery;

    constructor (
        orders: Order[],
        delivery: Delivery
    ) {
        this.orders = orders;
        this.delivery = delivery;
    }
}
