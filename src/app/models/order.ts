import { Item } from './item';

export class Order {
    item: Item;
    quantity: number;

    constructor (
        item: Item,
        quantity: number
    ) {
        this.item = item;
        this.quantity = quantity;
    }
}
