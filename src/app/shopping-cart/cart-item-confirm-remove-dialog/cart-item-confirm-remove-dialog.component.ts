import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cart-item-confirm-remove-dialog',
  templateUrl: './cart-item-confirm-remove-dialog.component.html',
  styleUrls: ['./cart-item-confirm-remove-dialog.component.css']
})
export class CartItemConfirmRemoveDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<CartItemConfirmRemoveDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
