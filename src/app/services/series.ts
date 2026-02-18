import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Serie {
  id?: number;
  title: string;
  channel: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private baseUrl = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.baseUrl);
  }

  create(payload: Serie): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }
}
