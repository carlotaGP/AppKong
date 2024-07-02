import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:3000/api/clientes'; 

  constructor(private http : HttpClient) { }

  private createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getClientes(token: string): Observable<any[]> {
    const headers = this.createHeaders(token);
    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
