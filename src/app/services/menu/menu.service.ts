
import { Injectable } from '@angular/core';

import { Menu } from '../../models/menu';
import { Pizza } from '../../models/pizza';
import { Size } from '../../models/size';

@Injectable()
export class MenuService {
    get(): Menu {
        const pizzas = [
            new Pizza('Pepperoni', ['Cheese', 'Pepperoni'], ''),
            new Pizza('Hawaiian', ['Ham', 'Bell Pepper', 'Pineapple'], ''),
            new Pizza('Garden Special', ['Bell Pepper', 'Tomato', 'Onion'], ''),
            new Pizza('BBQ', ['Boneless Pork Shoulder', 'Barbeque Sauce'], ''),
            new Pizza('Bacon Ranch', ['Bacon', 'Ranch Dressing', 'Cheese'], ''),
            new Pizza('Texas Heat', ['Chicken Breast', 'Bell Pepper', 'Cheese'], ''),
            new Pizza('Chicken BBQ', ['Boneless Chicken Breast', 'Barbeque Sauce', 'Cheese'], ''),
            new Pizza('Four Cheese', ['Parmesan Cheese', 'Provolone Cheese', 'Cheddar Cheese', 'Monterey Jack Cheese'], ''),
            new Pizza('Bicol Express', ['Pork Belly', 'Coconut Cream', 'Chili Pepper'], '')
        ];
        const sizes = [
            new Size('Regular', 100),
            new Size('Family', 200),
            new Size('Party', 300)
        ];

        return new Menu(pizzas, sizes);
    }
}
