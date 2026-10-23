import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioHalloween } from './formulario-halloween';

describe('FormularioHalloween', () => {
  let component: FormularioHalloween;
  let fixture: ComponentFixture<FormularioHalloween>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioHalloween],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioHalloween);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el formulario debe ser inválido inicialmente', () => {
    expect(component.formularioHalloween.valid).toBeFalsy();
  });

  it('debe añadir un objeto al array listaObjetos al enviar datos válidos', () => {
 
    component.formularioHalloween.setValue({
      nombre: 'Drácula',
      objeto: 'Calabaza'
    });

    expect(component.formularioHalloween.valid).toBeTruthy();


    component.enviar();


    expect(component.listaObjetos.length).toBe(1);
    expect(component.listaObjetos[0]).toBe('Calabaza');
  });
});