import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattime'
})
export class FormattimePipe implements PipeTransform {

  transform(value: any, inputType: string, defaultDecimal: number): any {
    let min = 0;
    let hours = 0;
    let returnVal = '';
    if (inputType === 'minutes') {
      min = value % 60;
      hours = (value - min) / 60;
    }
    if (hours > 0) {
      returnVal = returnVal + hours + ' Hour(s)'
    }
    if (min !== 0) {
      min = Math.ceil(min);
      returnVal = returnVal + ' ' + min + ' Minute(s)'
    }
    return returnVal;
  }

}
