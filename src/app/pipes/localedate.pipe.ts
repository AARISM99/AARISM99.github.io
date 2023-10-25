import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'localeDate' })
export class LocaleDatePipe implements PipeTransform {
  // adding a default format in case you don't want to pass the format
  // then 'yyyy-MM-dd' will be used
  transform(date: any, locale: string, format: string = 'yyyy-MM-dd'): string | null {
    date = new Date(date);  // if orginal type was a string

    const _date = date as Date;
    const today = new Date();
    const tomorrow = new Date(date.getDate() + 1);
    const yesterday = new Date(date.getDate() - 1);

    if(_date.getFullYear() == yesterday.getFullYear() && _date.getMonth() == yesterday.getMonth() && _date.getDate() == yesterday.getDate()) {
      return 'Yesterday' + ' ' + _date.toLocaleTimeString().split(':')[0] + ':' + _date.toLocaleTimeString().split(':')[1] + ' '  + _date.toLocaleTimeString().split(' ')[1] ;
    }

    if(_date.getFullYear() == today.getFullYear() && _date.getMonth() == today.getMonth() && _date.getDate() == today.getDate()) {
      return 'Today' + ' ' + _date.toLocaleTimeString().split(':')[0] + ':' + _date.toLocaleTimeString().split(':')[1] + ' '  + _date.toLocaleTimeString().split(' ')[1] ;
    }

    if(_date.getFullYear() == tomorrow.getFullYear() && _date.getMonth() == tomorrow.getMonth() && _date.getDate() == tomorrow.getDate()) {
      return 'Tomorrow' + ' ' + _date.toLocaleTimeString().split(':')[0] + ':' + _date.toLocaleTimeString().split(':')[1] + ' '  + _date.toLocaleTimeString().split(' ')[1] ;
    }

    return new DatePipe(locale).transform(date, format);
  }
}
