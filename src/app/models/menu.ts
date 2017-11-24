import { Pizza } from './pizza';
import { Size } from './size';

export class Menu {
    pizzas: Pizza[];
    sizes: Size[];

    constructor (
        pizzas: Pizza[],
        sizes: Size[]
    ) {
        this.pizzas = pizzas;
        this.sizes = sizes;
    }
}
