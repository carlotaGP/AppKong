import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOteComponent } from './page-ote.component';

describe('PageOteComponent', () => {
  let component: PageOteComponent;
  let fixture: ComponentFixture<PageOteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
