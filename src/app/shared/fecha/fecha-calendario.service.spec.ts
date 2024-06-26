import { TestBed } from '@angular/core/testing';

import { FechaCalendarioService } from './fecha-calendario.service';

describe('FechaCalendarioService', () => {
  let service: FechaCalendarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaCalendarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
