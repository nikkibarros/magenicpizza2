import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { forbiddenNameValidator } from './forbiddenname-validator';
@Directive({
  selector: '[forbiddenName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenNameDirective,
    multi: true
  }]
})
export class ForbiddenNameDirective implements Validator {
  @Input() forbiddenName: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
      return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }

}
