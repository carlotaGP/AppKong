import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string = '';

  constructor() {    if (typeof localStorage !== 'undefined') {
    this.token = localStorage.getItem('token') || '';
  } }

 // Método genérico para decodificar el token y obtener un campo específico
 private decodeTokenField(field: string): string {
  let valor: string = '';
    if (this.token) {
      const decodedToken: any = jwtDecode(this.token);
      valor = decodedToken[field] || '';
    }
  return valor;
}
  getUsername(): string {
    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token') || '';
    }
    return this.decodeTokenField('username');
  }

  getUserId(): string {
    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token') || '';
    }
    return this.decodeTokenField('id');
  }

  getToken(): string {
    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token') || '';
    }
    return this.token;
  }
}
