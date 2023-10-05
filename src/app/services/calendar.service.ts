import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { GlobalConstants } from '../global/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private constants: GlobalConstants = new GlobalConstants();

  private uri = `http://api.aladhan.com/v1`;

  constructor(private http: HttpClient) { }

  getDateHijriForToday(params: any): Observable<any>{
    var dateNow = new Date();
    var getYear = dateNow.toLocaleDateString("default", {year: "numeric"});
    var getMonth = dateNow.toLocaleDateString("default", {month: "2-digit"});
    var getDay = dateNow.toLocaleDateString("default", {day: "2-digit"});
    var dateFormat = getDay + '-' + getMonth + '-' + getYear;

    params.method = this.constants._method;

    return this.http.get<any>(this.uri + `/timings/${dateFormat}`, {
      params: params
    }).pipe(map(res => res));

  }


  getDateHijriByDate(date: Date) : Observable<any> {
    return this.http.get<any>(this.uri + `/timings/${date}`);
  }

  getCalendarByParams(params: any) : Observable<any> {
    // var dateNow = new Date();
    // var getYear = dateNow.toLocaleDateString("default", {year: "numeric"});
    // var getMonth = dateNow.toLocaleDateString("default", {month: "2-digit"});
    // var getDay = dateNow.toLocaleDateString("default", {day: "2-digit"});
    // params.method = GlobalConstants.method;

    return this.http.get<any>(this.uri + `/calendarByAddress/${params.year}/${params.month}`, {
      params: params
    }).pipe(map(res =>  res));

  }
}
