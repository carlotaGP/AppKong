import { Component } from '@angular/core';
import { IdProyectosService } from '../../services/proyectos/id-proyectos.service';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../shared/token/token.service';
import { ClientesService } from '../../services/clientes/clientes.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ote',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ote.component.html',
  styleUrl: './ote.component.css'
})
export class OteComponent {
  fechaActual: Date = new Date();
  nombre: string = '';
  observaciones: string = '';
  id_cliente: number = 0;
  token: string = '';
  clientes: any[] = [];

  constructor(private proyectoService: IdProyectosService, private tokenService: TokenService, private clientesService: ClientesService, private router: Router){}
  
  ngOnInit(): void {
    this.token = this.tokenService.getToken();
    if(this.token != null && this.token != ''){
      this.obtenerClientes();
    }
  }

  agregarProyecto() {
    if (!this.nombre || !this.observaciones || this.id_cliente == 0) {
      alert('Por favor, complete todos los campos.');
    }else{
      this.proyectoService.crearProyecto(this.nombre, this.observaciones, this.id_cliente, this.formatearFecha(this.fechaActual), this.token)
      .subscribe(
        response => {
          //si agrega un proyecto a la bdd, se limpian los campos
          this.nombre = '';
          this.observaciones = '';
          this.id_cliente = 0;
          this.router.navigate(['/proyectos']); // Redirigir a la siguiente interfaz
        },
        error => {
          console.error('Error al crear el proyecto:', error);
        }
      );
    }
  }

  obtenerClientes(): void {
    this.clientesService.getClientes(this.token).subscribe(
      data => {
        this.clientes = data;
      },
      error => {
        console.error('Error al obtener clientes', error);
      }
    );
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
