// calendario.component.ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FechaCalendarioService } from '../../shared/fecha/fecha-calendario.service';

registerLocaleData(localeEs);

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-calendario',
  standalone: true,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarioComponent {
  fecha: Date | null = new Date();
  
  constructor(private dateAdapter: DateAdapter<any>, private fechaCalendarioService: FechaCalendarioService) {
    this.dateAdapter.setLocale('es');
    this.fechaCalendarioService.setFecha(this.fecha);
  }

  fechaSeleccionada(date: Date | null) {
    this.fecha = date;
    this.fechaCalendarioService.setFecha(date);
  }
}
