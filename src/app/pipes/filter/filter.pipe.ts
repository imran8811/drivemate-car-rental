import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterValues' })
export class FilterPipe implements PipeTransform {

  transform(values: string[], args?: string): any {
    if (args) {
      return values.filter(value => value.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
    }
    return values;
  }

}
