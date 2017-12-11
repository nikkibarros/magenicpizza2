import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

export function zipValueValidator(zipList: string[]): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const valid = zipList.includes(control.value);
        return valid ? null : { 'zipValue': { value: control.value } };
    };
}

export function zipFormatValidator(zipRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const valid = zipRe.test(control.value);
        return valid ? null : { 'zipFormat': { value: control.value } };
    };
}
