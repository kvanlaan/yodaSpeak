import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceResponse } from '../models/service-response';


@Injectable({
  providedIn: 'root'
})
export class YodaSpeakApiService {
  constructor(private http: HttpClient) { }

  getYodaSpeak(input: string): Observable<ServiceResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'yodish.p.rapidapi.com',
        'x-rapidapi-key': '910efb8f60msh5532e6137515fedp18be03jsnc476e6531dd3',
        'content-type': 'application/x-www-form-urlencoded'
      }),
      params: new HttpParams().set('text', input)
    };

    return this.http
      .post<ServiceResponse>('https://yodish.p.rapidapi.com/yoda.json', {
        text: input
      }, httpOptions)
      .pipe(map(result => result));
  }
}
