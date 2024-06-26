import { Component } from '@angular/core';
import { AsistenciaComponent } from '../../components/asistencia/asistencia.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-fichar-asistencia',
  standalone: true,
  imports: [AsistenciaComponent, HeaderComponent],
  templateUrl: './fichar-asistencia.component.html',
  styleUrl: './fichar-asistencia.component.css'
})
export class FicharAsistenciaComponent {

}
