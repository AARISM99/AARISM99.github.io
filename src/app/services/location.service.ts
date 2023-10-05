import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../global/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private constants: GlobalConstants = new GlobalConstants();

  private uri: string = "https://api64.ipify.org?format=json";
  // private uri2 = "https://api.opencagedata.com/geocode/v1/json?key=" + GlobalConstants.getOpenCageToken;
  private uri2 = "https://nominatim.openstreetmap.org/reverse?format=json";
  private uri3: string = "https://api.ipgeolocation.io/ipgeo?apiKey=" + this.constants._ipgeolocationToken;

  constructor(private http: HttpClient) { }

  getCurrentIPAddress(): Observable<any> {
    return this.http.get<any>(this.uri);
  }

  getAddressViaCoordinates(latitude: number, longitude: number): Observable<any> {

    let headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Accept-language', this.constants._lang)

    let params = new HttpParams()
    .set('lat', latitude)
    .set('lon', longitude)
    // .set('q', latitude + '+' + longitude);

    return this.http.get<any>(this.uri2, {
      headers: headers,
      params: params
    })
  }

  getAddressViaIPAddress(): Observable<any> {
    // let params = new HttpParams().set('ip', ip);
    // return this.http.get<any>(this.uri3, {params: params});
    return this.http.get<any>(this.uri3);
  }

}
