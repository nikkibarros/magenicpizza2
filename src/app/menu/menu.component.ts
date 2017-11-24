import { MiddlemanService } from './../services/middleman/middleman.service';
import { Item } from './../models/item';
import { Menu } from './../models/menu';
import { MenuService } from './../services/menu/menu.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedItem: Item;
  isBtnDisabled = true;
  @Input() disabled = false;

  constructor(private middlemanService: MiddlemanService) { }

  ngOnInit() {
  }

  selectItemHandler(e: Item) {
    this.selectedItem = e;
    this.isBtnDisabled = false;
  }

  addItem(): void {
    this.middlemanService.addItem(
      new Item(this.selectedItem.pizza, this.selectedItem.size)
    );
  }

}
