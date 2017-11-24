import { Size } from './../../models/size';
import { Pizza } from './../../models/pizza';
import { Item } from './../../models/item';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  menu: Menu;
  selectedItem: Item;
  @Output() itemWasSelected: EventEmitter<Item> = new EventEmitter();

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.menu = this.menuService.get();
  }

  selectPizza(pizza: Pizza) {
    if (this.selectedItem) {
      this.selectedItem.pizza = pizza;
    } else {
      this.selectedItem = new Item(pizza, null);
    }

    if (this.selectedItem.size) {
      this.itemWasSelected.emit(this.selectedItem);
    }
  }

  selectSize(size: Size) {
    if (this.selectedItem) {
      this.selectedItem.size = size;
    } else {
      this.selectedItem = new Item(null, size);
    }

    if (this.selectedItem.pizza) {
      this.itemWasSelected.emit(this.selectedItem);
    }
  }

}
