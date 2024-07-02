import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FichajesProyectoComponent } from '../../components/fichajes-proyecto/fichajes-proyecto.component';

@Component({
  selector: 'app-page-fichajes-proyecto',
  standalone: true,
  imports: [HeaderComponent, FichajesProyectoComponent],
  templateUrl: './page-fichajes-proyecto.component.html',
  styleUrl: './page-fichajes-proyecto.component.css'
})
export class PageFichajesProyectoComponent {

}
