import { Component } from '@angular/core';
import { OrderSummary } from './models/order-summary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAtOrderSummary = false;
  orderSummary: OrderSummary;

  isAtOrderSummaryHandler(e: OrderSummary) {
    this.isAtOrderSummary = true;
    this.orderSummary = e;
  }
}
