import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaHalloweenComponent } from '../tarjeta-halloween/tarjeta-halloween';

@Component({
  selector: 'app-formulario-halloween',
  imports: [ReactiveFormsModule, TarjetaHalloweenComponent],
  templateUrl: './formulario-halloween.html',
  styleUrl: './formulario-halloween.css'
})
export class FormularioHalloween {
  formularioHalloween = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    objeto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    propietario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
  });

  listaObjetos: any[] = [];


  tieneError(campo: string): boolean {
    const control = this.formularioHalloween.get(campo);
    if (control) {
      return control.invalid && (control.dirty || control.touched);
    }
    return false;
  }

  enviar() {
    if (this.formularioHalloween.valid) {
      this.listaObjetos.push(this.formularioHalloween.value);
      this.formularioHalloween.reset();
    }
  }
}
