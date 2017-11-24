import { Order } from './../../models/order';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordered-item',
  templateUrl: './ordered-item.component.html',
  styleUrls: ['./ordered-item.component.css']
})
export class OrderedItemComponent implements OnInit {
  @Input() orders: Order[];

  constructor() { }

  ngOnInit() {
  }

}
