
import { Delivery } from './../../models/delivery';

import { Component, OnInit, Output, EventEmitter, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit, AfterViewChecked {
  delivery: Delivery = new Delivery([], '', '', '', '', '', '', '');
  @Output() deliveryValid: EventEmitter<Delivery> = new EventEmitter();
  @ViewChild('deliveryForm') currentForm: NgForm;
  myForm: NgForm;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.formChange();
  }



  onValueChanged(): void {
    if (this.myForm.valid) {
      this.deliveryValid.emit(this.delivery);
    }

  }

  formChange() {
    if (this.currentForm === this.myForm) {
      return;
    }

    this.myForm = this.currentForm;
    if (this.myForm) {
      this.myForm.valueChanges.subscribe(data => this.onValueChanged());
    }
  }

}
