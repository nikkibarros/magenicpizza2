import { Pipe, PipeTransform } from '@angular/core';
// import { startCase } from 'lodash/startCase';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
        return '';
    } else {
        return value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
        // return startCase(value);
    }
  }

}
