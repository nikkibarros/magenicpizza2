import { Size } from './size';
import { Pizza } from './pizza';

export class Item {
    pizza: Pizza;
    size: Size;

    constructor (
        pizza: Pizza,
        size: Size
    ) {
        this.pizza = pizza;
        this.size = size;
    }
}
