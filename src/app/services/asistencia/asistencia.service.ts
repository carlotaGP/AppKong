import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private baseUrl = 'http://localhost:3000/api/asistencia';

  constructor(private http: HttpClient) { }

  ficharEntrada(userId: number, date: string, horaEntrada: string, token: string) {
    const body = { userId, date, horaEntrada };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.baseUrl}/entrada`, body, { headers });
  }

  ficharSalida(userId: number, date: string, horaSalida: string, token: string) {
    const body = { userId, date, horaSalida };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.baseUrl}/salida`, body, { headers });
  }

  obtenerPartesUsuarioFecha(userId: number, date: string, token: string): Observable<any> {
    const params = new HttpParams().set('date', date);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.baseUrl}/partes-usuario`, { headers, params });
  }
}
