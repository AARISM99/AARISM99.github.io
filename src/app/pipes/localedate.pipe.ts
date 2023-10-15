import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'localeDate' })
export class LocaleDatePipe implements PipeTransform {
  // adding a default format in case you don't want to pass the format
  // then 'yyyy-MM-dd' will be used
  transform(date: any, locale: string, format: string = 'yyyy-MM-dd'): string | null {
    date = new Date(date);  // if orginal type was a string

    return new DatePipe(locale).transform(date, format);
  }
}
