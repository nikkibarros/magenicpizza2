import { OrderSummary } from './../models/order-summary';
import { Subject } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { MiddlemanService } from '../services/middleman/middleman.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() orderSummary: OrderSummary;

  constructor(private middlemanService: MiddlemanService) { }

  ngOnInit() {
    /* this.middlemanService.orderNow$.takeUntil(this.destroyed$).subscribe(
      orderSummary => this.newOrderSummary(orderSummary)
    ); */
  }

  newOrderSummary(orderSummary: OrderSummary) {
    this.orderSummary = orderSummary;
  }

}
