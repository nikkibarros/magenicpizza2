import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { phoneFormatValidator } from './phoneformat-validator';
@Directive({
  selector: '[phoneFormat]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneFormatDirective,
    multi: true
  }]
})
export class PhoneFormatDirective implements Validator {
  @Input() phoneFormat: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
      return this.phoneFormat ? phoneFormatValidator(new RegExp(this.phoneFormat, 'i'))(control) : null;
  }

}
