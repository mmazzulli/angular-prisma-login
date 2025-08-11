import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbTestService {
  private apiUrl = 'http://localhost:3000/test-db';

  constructor(private http: HttpClient) {}

  getDbStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
