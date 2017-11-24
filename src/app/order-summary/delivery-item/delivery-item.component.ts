import { Delivery } from './../../models/delivery';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-item',
  templateUrl: './delivery-item.component.html',
  styleUrls: ['./delivery-item.component.css']
})
export class DeliveryItemComponent implements OnInit {
  @Input() delivery: Delivery;

  constructor() { }

  ngOnInit() {
  }

}
