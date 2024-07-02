import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichajesProyectoComponent } from './fichajes-proyecto.component';

describe('FichajesProyectoComponent', () => {
  let component: FichajesProyectoComponent;
  let fixture: ComponentFixture<FichajesProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichajesProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichajesProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
