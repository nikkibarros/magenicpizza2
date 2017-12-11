import { OrderSummary } from './../models/order-summary';
import { Delivery } from './../models/delivery';
import { Item } from './../models/item';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { MiddlemanService } from '../services/middleman/middleman.service';
import { Subject } from 'rxjs/Rx';
import { ViewChild } from '@angular/core/src/metadata/di';
import { DeliveryComponent } from './delivery/delivery.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Order } from '../models/order';




@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  // @ViewChild(DeliveryComponent) deliveryComponent: DeliveryComponent;
  @Output() isAtOrderSummary: EventEmitter<OrderSummary> = new EventEmitter();
  orders: Order[] = [];

  hasItems = false;
  isBtnDisabled = false;
  deliveryInvalid = false;
  delivery: Delivery;

  constructor(private middlemanService: MiddlemanService) { }

  ngOnInit() {
    this.middlemanService.addItem$.takeUntil(this.destroyed$).subscribe(
      item => this.newItem(item)
    );

  }

  /* ngAfterViewInit(): void {
    setInterval(() => {
      this.isBtnDisabled = this.deliveryComponent.delivery === null;
    }, 0);
  } */

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getExistingOrderIndex(orders: Order[], pizzaName: string, sizeName: string): number {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].item.pizza.name === pizzaName && orders[i].item.size.name === sizeName) {
        return i;
      }
    }

    return -1;
  }

  newItem(newItem: Item) {
    const existingOrderIndex = this.getExistingOrderIndex(this.orders, newItem.pizza.name, newItem.size.name);

    if (existingOrderIndex >= 0) {

      this.orders[existingOrderIndex].quantity++;
    } else {
      this.orders.push(new Order(newItem, 1));
      this.hasItems = true;
    }

  }

  deliveryValidHandler(e: Delivery) {
    // this.isBtnDisabled = false;
    this.delivery = e;
  }

  orderNow(): void {
    if (this.delivery) {
      this.isAtOrderSummary.emit(
        new OrderSummary(this.orders, this.delivery)
      );
    } else {
      this.deliveryInvalid = true;
    }
    /* this.middlemanService.orderNow(
      new OrderSummary(this.orders, this.delivery)
    ); */
  }

  changedOrdersHandler(e: Order[]) {
    this.orders = e;
    this.hasItems = this.orders.length > 0;
  }

}
