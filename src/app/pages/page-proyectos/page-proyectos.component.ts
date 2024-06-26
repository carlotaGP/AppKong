import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';

@Component({
  selector: 'app-page-proyectos',
  standalone: true,
  imports: [HeaderComponent, ProyectosComponent],
  templateUrl: './page-proyectos.component.html',
  styleUrl: './page-proyectos.component.css'
})
export class PageProyectosComponent {

}
