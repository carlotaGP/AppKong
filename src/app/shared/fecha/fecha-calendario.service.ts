import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FechaCalendarioService {
  private fechaSeleccionada: BehaviorSubject<Date | null> = new BehaviorSubject<Date | null>(null);
  fecha$: Observable<Date | null> = this.fechaSeleccionada.asObservable();

  constructor() { }

  setFecha(date: Date | null) {
    this.fechaSeleccionada.next(date);
  }
}
