import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'removeDecimals'})
export class RemoveDecimalsPipe implements PipeTransform {

  transform(value: number): number {
    return Math.trunc(value);
  }

}
