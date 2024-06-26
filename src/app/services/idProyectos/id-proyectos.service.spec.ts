import { TestBed } from '@angular/core/testing';

import { IdProyectosService } from '../id-proyectos.service';

describe('IdProyectosService', () => {
  let service: IdProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
