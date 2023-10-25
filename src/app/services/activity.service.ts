import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Activity } from '../models/activity.model';
import { KeyValue } from '../models/keyValue.model';
import { configuration } from 'src/global';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private uri = `${configuration.apiUrl}/activities/frontend`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.uri + '/all');
  }

  getActivitiesByCategory(cat: any): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.uri + `/filter/category/${cat}`);
  }

  getRelatedActivities(id: any, cat = "default", sortField = "date_publication", sortOrder = 'desc', pageNumber = 1, pageSize = 12):  Observable<any> {
    return this.http.get(this.uri + `/related/activity/${id}/cat/${cat}`, {
        params: new HttpParams()
            .set('sortField', sortField)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(map(res =>  res));
  }

  getActivities(sortField = "date_publication", sortOrder = 'desc', pageNumber = 1, pageSize = 12):  Observable<any> {
    return this.http.get(this.uri + '/pactivities', {
        params: new HttpParams()
            .set('sortField', sortField)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(map(res =>  res));
  }

  getByKeywords(keywords: KeyValue[], sortField = "date_publication", sortOrder = 'desc', pageNumber: number = 1, pageSize: number = 10): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('sortField', sortField);
    params = params.append('sortOrder', sortOrder);
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    keywords.forEach((kw) => params = params.append(kw.key as string, kw.value as string));
    // console.log(params);
    return this.http.get<any>(this.uri + `/activities-search`, { params: params });
  }

  getOne(id: any): Observable<Activity> {
    return this.http.get<Activity>(this.uri + `/one/${id}`);
  }
}
