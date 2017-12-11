
import { Delivery } from './../../models/delivery';

import { Component, OnInit, Output, EventEmitter, AfterViewChecked, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit, AfterViewChecked {
  delivery: Delivery = new Delivery([], '', '', '', '', '', '', '');
  @Output() details: EventEmitter<Delivery> = new EventEmitter();
  @Output() detailsValid: EventEmitter<boolean> = new EventEmitter();
  @Input() showErrors: boolean;
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
      this.details.emit(this.delivery);
    }

    this.detailsValid.emit(this.myForm.valid);
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
