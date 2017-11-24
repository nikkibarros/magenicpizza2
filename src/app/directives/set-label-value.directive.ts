import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetLabelValue]'
})
export class SetLabelValueDirective {

  constructor(el: ElementRef) {
    el.nativeElement.text = 'test';
  }

}
