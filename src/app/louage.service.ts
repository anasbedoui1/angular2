import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Louage } from './louage.interface';

@Injectable({
  providedIn: 'root'
})
export class LouageService {

  private apiUrl = 'http://localhost:8083/api/louages';

  constructor(private http: HttpClient) { }

  getAllLouages(): Observable<Louage[]> {
    return this.http.get<Louage[]>(this.apiUrl);
  }

  getLouage(id: number): Observable<Louage> {
    return this.http.get<Louage>(`${this.apiUrl}/${id}`);
  }

  createLouage(louage: Louage): Observable<Louage> {
    return this.http.post<Louage>(this.apiUrl, louage);
  }

  updateLouage(louage: Louage): Observable<Louage> {
    return this.http.put<Louage>(`${this.apiUrl}/${louage.id}`, louage);
  }

  deleteLouage(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
