import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fichajes-proyecto',
  standalone: true,
  imports: [],
  templateUrl: './fichajes-proyecto.component.html',
  styleUrl: './fichajes-proyecto.component.css'
})
export class FichajesProyectoComponent {
  proyectoNombre: string = '';
  proyectoId: number = 0;
  fechaSistema: string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.proyectoNombre = this.route.snapshot.paramMap.get('nombre') || '';
    this.proyectoId = Number(this.route.snapshot.paramMap.get('id'));
    this.getFechaSistema();
  }

  getFechaSistema(): void {
    const hoy = new Date();
    const dd = String(hoy.getDate()).padStart(2, '0');
    const mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Enero es 0!
    const yyyy = hoy.getFullYear();

    this.fechaSistema = `${dd}/${mm}/${yyyy}`;
  }
}
