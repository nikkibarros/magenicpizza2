import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetLabelValue]'
})
export class SetLabelValueDirective {
  @Input() labelValue: string;

  constructor(el: ElementRef) {
    el.nativeElement.text = 'test';
  }

}
