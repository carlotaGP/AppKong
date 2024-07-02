import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFichajesProyectoComponent } from './page-fichajes-proyecto.component';

describe('PageFichajesProyectoComponent', () => {
  let component: PageFichajesProyectoComponent;
  let fixture: ComponentFixture<PageFichajesProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFichajesProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFichajesProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
