import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private baseUrl = 'http://localhost:8080/api/v1/comics';
  constructor(private http: HttpClient) {}
  getComicsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
