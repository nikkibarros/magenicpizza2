import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { zipValueValidator } from './zip-validator';
@Directive({
  selector: '[zipValue]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ZipValueDirective,
    multi: true
  }]
})
export class ZipValueDirective implements Validator {

  zipCodes: string[] = [
    'IG11 7LZ',
    'PH01 2MM',
    'AB12 3CD'
  ];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
      return zipValueValidator(this.zipCodes)(control);
  }

}
