import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHalloween } from './tarjeta-halloween';

describe('TarjetaHalloween', () => {
  let component: TarjetaHalloween;
  let fixture: ComponentFixture<TarjetaHalloween>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaHalloween],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaHalloween);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
