import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bushido } from './bushido';

describe('Bushido', () => {
  let component: Bushido;
  let fixture: ComponentFixture<Bushido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bushido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bushido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
