import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaComponent } from '../asistencia/asistencia.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  abrirAsistencia(){
    this.router.navigate(['/fichar-asistencia'])
  }
}
