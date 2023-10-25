import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Lesson } from '../models/lesson.model';
import { KeyValue } from '../models/keyValue.model';
import { configuration } from 'src/global';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private uri = `${configuration.apiUrl}/lessons/frontend`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.uri + '/all');
  }

  getLessonsByCategory(cat: any): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.uri + `/filter/category/${cat}`);
  }

  getRelatedLessons(id: any, cat: any): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.uri + `/related/lesson/${id}/cat/${cat}`);
  }

  getLessons(sortField = "date_publication", sortOrder = 'desc', pageNumber = 1, pageSize = 12):  Observable<any> {
    return this.http.get(this.uri + '/plessons', {
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
    return this.http.get<any>(this.uri + `/lessons-search`, { params: params });
  }

  getOne(id: any): Observable<Lesson> {
    return this.http.get<Lesson>(this.uri + `/one/${id}`);
  }
}
