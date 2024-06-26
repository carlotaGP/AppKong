import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OteComponent } from './ote.component';

describe('OteComponent', () => {
  let component: OteComponent;
  let fixture: ComponentFixture<OteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
