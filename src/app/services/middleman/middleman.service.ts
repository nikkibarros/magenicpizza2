import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Item } from '../../models/item';
import { OrderSummary } from '../../models/order-summary';

@Injectable()
export class MiddlemanService {
  private addItemSubject: Subject<Item> = new Subject<Item>();
  private orderNowSubject: Subject<OrderSummary> = new Subject<OrderSummary>();

  public addItem$ = this.addItemSubject.asObservable();
  public orderNow$ = this.orderNowSubject.asObservable();

  constructor() { }

  addItem(item): void {
    this.addItemSubject.next(item);
  }

  orderNow(orderSummary): void {
    this.orderNowSubject.next(orderSummary);
  }

}
