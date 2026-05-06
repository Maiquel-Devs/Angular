import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curiosidades } from './curiosidades';

describe('Curiosidades', () => {
  let component: Curiosidades;
  let fixture: ComponentFixture<Curiosidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Curiosidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curiosidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
