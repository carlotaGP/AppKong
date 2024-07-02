import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdProyectosService {

  private baseUrl = 'http://localhost:3000/api/proyectos';

  constructor(private http: HttpClient) { }

  private createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  obtenerIdProyectos(userId: number, date: string, token: string): Observable<any> {
    const params = new HttpParams().set('date', date);
    const headers = this.createHeaders(token);
    return this.http.get<any[]>(`${this.baseUrl}/id-proyectos`, { headers, params });
  }

  obtenerProyectos(ids: number[], token: string): Observable<any[]> {
    const headers = this.createHeaders(token);
    const body = { ids };
    return this.http.post<any[]>(`${this.baseUrl}/proyectos`, body, { headers});
  }

  crearProyecto(nombre: string, observaciones: string, id_cliente: number, fechaCalendario: string, token: string): Observable<any> {
    const headers = this.createHeaders(token); 
    const body = { nombre, observaciones, id_cliente, fechaCalendario };
    return this.http.post<any>(`${this.baseUrl}/crear-proyectos`, body, { headers});
  }
}
