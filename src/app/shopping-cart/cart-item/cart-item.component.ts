import { CartItemConfirmRemoveDialogComponent } from './../cart-item-confirm-remove-dialog/cart-item-confirm-remove-dialog.component';

import { Order } from './../../models/order';
import { Item } from './../../models/item';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() orders: Order[];


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  showConfirmRemove(e: Order): void {
    const dialogRef = this.dialog.open(CartItemConfirmRemoveDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        const i = this.orders.indexOf(e);
        this.orders.splice(i, 1);
      }
    });
  }

}


