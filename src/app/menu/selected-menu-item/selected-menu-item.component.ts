import { Item } from './../../models/item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-menu-item',
  templateUrl: './selected-menu-item.component.html',
  styleUrls: ['./selected-menu-item.component.css']
})
export class SelectedMenuItemComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
