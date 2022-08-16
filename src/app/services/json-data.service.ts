import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  // Get data From data.json
  constructor(private http: HttpClient) {}
  getData(): Observable<[]> {
    return this.http.get<[]>('assets/data.json');
  }
}
