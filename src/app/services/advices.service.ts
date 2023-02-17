import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Slip, RootObject } from './advice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {

  apiUrl = "https://api.adviceslip.com/advice"

  constructor(private http: HttpClient) { }

  getPhrase(): Observable<RootObject> {
    return this.http.get<RootObject>(this.apiUrl)

  }




}
