import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicharAsistenciaComponent } from './fichar-asistencia.component';

describe('FicharAsistenciaComponent', () => {
  let component: FicharAsistenciaComponent;
  let fixture: ComponentFixture<FicharAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicharAsistenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicharAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
