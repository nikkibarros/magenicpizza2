import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { zipFormatValidator } from './zip-validator';
@Directive({
  selector: '[zipFormat]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ZipFormatDirective,
    multi: true
  }]
})
export class ZipFormatDirective implements Validator {
  @Input() zipFormat: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
      return this.zipFormat ? zipFormatValidator(new RegExp(this.zipFormat, 'i'))(control) : null;
  }

}
