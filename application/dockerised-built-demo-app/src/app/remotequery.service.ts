import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemotequeryService {
  //private lambdaUrl = 'https://a3w53mynva.execute-api.ap-southeast-2.amazonaws.com/Prod/hello';
  constructor(
    private http: HttpClient
  ) { }

  messages: string[] = [];

  queryGet(url:string) : Observable<any> {
    return this.http.get(url);
  }

  //http://worldtimeapi.org/api/timezone/Australia/Sydney

  //clear() {
  //  this.messages = [];
  //}
}
