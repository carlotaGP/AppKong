import { Component, OnInit } from '@angular/core';
import { CalendarioComponent } from '../calendario/calendario.component';
import { FechaCalendarioService } from '../../shared/fecha/fecha-calendario.service';
import { IdProyectosService } from '../../services/idProyectos/id-proyectos.service';
import { TokenService } from '../../shared/token/token.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CalendarioComponent, CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {
  fechaSeleccionada: Date = new Date();
  token: string = '';
  userId: string = '';
  idProyectos: number[] = [];
  proyectos: any[] = [];


  constructor(private fechaCalendarioService: FechaCalendarioService, private idProyectosService: IdProyectosService, private tokenService: TokenService, private router: Router){}

  ngOnInit(){
    this.token = this.tokenService.getToken();
    this.userId = this.tokenService.getUserId();

    this.fechaCalendarioService.fecha$.subscribe(date => {
      if (date != null){
        this.fechaSeleccionada = date;
        if(this.userId){
          this.obtenerIdProyectos();
        }
      }
    });
  }

  obtenerIdProyectos(): void{
    const fechaFormateada = this.formatearFecha(this.fechaSeleccionada);

    this.idProyectosService.obtenerIdProyectos(Number.parseInt(this.userId), fechaFormateada, this.token)
    .subscribe(
      (data) => {
        this.idProyectos = data;
        if(this.idProyectos.length > 0){
          this.obtenerProyectosPorIds();
        }else{
          this.proyectos = [];
        }
      }, 
      (error) =>{
        console.error('Error al obtener id de los proyectos:', error);
      }
    );
  }

  obtenerProyectosPorIds(): void {
    this.idProyectosService.obtenerProyectos(this.idProyectos, this.token)
      .subscribe(
        data => {
          this.proyectos = data;
          console.log('token', this.token);
          console.log('Proyectos obtenidos:', this.proyectos);
        },
        (error) => {
          console.error('Error al obtener proyectos por IDs:', error);
        }
      );
  }

  irOte(): void{
    this.router.navigate(['/ote']); // Redirigir a la siguiente interfaz
  }

  formatearFecha(date: Date): string {
    const day = date.getDate();
    const mes = date.getMonth() + 1;
    const anio = date.getFullYear();
    return `${anio}-${this.padNumber(mes)}-${this.padNumber(day)}`;
  }

  private padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
