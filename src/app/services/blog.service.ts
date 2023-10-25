import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Blog } from '../models/blog.model';
import { KeyValue } from '../models/keyValue.model';
import { configuration } from 'src/global';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private uri = `${configuration.apiUrl}/blogs/frontend`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.uri + '/all');
  }

  getBlogsByCategory(cat: any): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.uri + `/filter/category/${cat}`);
  }

  getRecentBlogs(sortField = "date_publication", sortOrder = 'desc', pageNumber = 1, pageSize = 12):  Observable<any> {
    return this.http.get(this.uri + '/recent', {
        params: new HttpParams()
            .set('sortField', sortField)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(map(res =>  res));
  }

  getRelatedBlogs(id: any, cat: any): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.uri + `/related/blog/${id}/cat/${cat}`);
  }

  getBlogs(sortField = "date_publication", sortOrder = 'desc', pageNumber = 1, pageSize = 12):  Observable<any> {
    return this.http.get(this.uri + '/pblogs', {
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
    return this.http.get<any>(this.uri + `/blogs-search`, { params: params });
  }

  getOne(id: any): Observable<Blog> {
    return this.http.get<Blog>(this.uri + `/one/${id}`);
  }
}
