import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'addZeroIfNbrLtTenTransform' })
export class AddZeroIfNbrLtTenFormat implements PipeTransform {
  transform(time: any): any {

  var addZeroIfNbrLtTen = function(number: any) {
      //below date doesn't matter.
    return number < 10 ? '0' + number : number;
  };

    return addZeroIfNbrLtTen(time);
  }
}
