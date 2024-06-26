import { Component} from '@angular/core';
import { AsistenciaService } from '../../services/asistencia/asistencia.service';
import { TokenService } from '../../shared/token/token.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asistencia.component.html',
  styleUrl: './asistencia.component.css'
})
export class AsistenciaComponent {
  partesUsuario: any[] = [];
  fechaSistema: string = '';
  token: string = '';
  userId: string = '';

  constructor(private asistenciaService: AsistenciaService, private tokenService: TokenService, private router: Router){}

  ngOnInit(): void {
    this.getFechaSistema();
    this.token = this.tokenService.getToken();
    this.userId = this.tokenService.getUserId();

    if(this.userId){
      this.obtenerPartesUsuario();
    }
  }

  obtenerPartesUsuario(): void{
    if(this.fechaSistema){
      this.asistenciaService.obtenerPartesUsuarioFecha(Number.parseInt(this.userId), this.fechaSistema, this.token)
      .subscribe(
        (data) => {
          this.partesUsuario = data;
        }, 
        (error) =>{
          console.error('Error al obtener partes del usuario:', error);
        }
      );
    }
  }

  ficharEntrada(): void {
    const hEntrada = new Date().toLocaleTimeString();

    this.asistenciaService.ficharEntrada(Number.parseInt(this.userId), this.fechaSistema, hEntrada, this.token)
    .subscribe(
      response => {
        console.log(response.message);
        this.obtenerPartesUsuario();
      },
      error => {
        console.error('Error al fichar entrada:', error);
        alert('Error al fichar entrada. Ya ha fichado entrada antes, debe de fichar.');
      }
    );
  }

  ficharSalida(): void {
    const hSalida = new Date().toLocaleTimeString(); 

    this.asistenciaService.ficharSalida(Number.parseInt(this.userId), this.fechaSistema, hSalida, this.token)
      .subscribe(
        response => {
          console.log(response.message);
          this.obtenerPartesUsuario();
          // Manejar la respuesta del servidor según necesites
        },
        error => {
          console.error('Error al fichar salida:', error);
          alert('Error al fichar salida. Debe de fichar entrada primero.');
        }
      );
  }

  abrirServicios(): void{
    this.router.navigate(['/proyectos']); // Redirigir a la siguiente interfaz
  }

  getFechaSistema(): void {
    const hoy = new Date();
    const dd = String(hoy.getDate()).padStart(2, '0');
    const mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Enero es 0!
    const yyyy = hoy.getFullYear();

    this.fechaSistema = `${dd}/${mm}/${yyyy}`;
  }
}
