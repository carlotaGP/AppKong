import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProyectosComponent } from './page-proyectos.component';

describe('PageProyectosComponent', () => {
  let component: PageProyectosComponent;
  let fixture: ComponentFixture<PageProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
