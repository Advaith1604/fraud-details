import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://reqres.in';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  constructor(private http: HttpClient) { }

   public get(url: string): Observable<any> {
    return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
  }
  public post(url: string, obj : any): Observable<any> {
     return this.http.post(API_URL + '/api/' + url , obj).pipe(map(res => res));
  }

}
