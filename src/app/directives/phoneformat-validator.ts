import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

export function phoneFormatValidator(phoneRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const valid = phoneRe.test(control.value);
        return valid ? null : { 'phoneFormat': { value: control.value } };
    };
}
