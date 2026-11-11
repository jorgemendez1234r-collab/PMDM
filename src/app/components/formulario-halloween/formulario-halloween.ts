import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaHalloweenComponent } from '../tarjeta-halloween/tarjeta-halloween';

@Component({
  selector: 'app-formulario-halloween',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TarjetaHalloweenComponent],
  templateUrl: './formulario-halloween.html',
  styleUrls: ['./formulario-halloween.css']
})
export class FormularioHalloween {
  formularioHalloween: FormGroup;
  listaObjetos: any[] = [];

  constructor(private fb: FormBuilder) {
    this.formularioHalloween = this.fb.group({
      imagen: ['', [Validators.required]],
      objeto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      propietario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  tieneError(campo: string): boolean {
    const control = this.formularioHalloween.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  enviar() {
    if (this.formularioHalloween.valid) {
      const nuevoObjeto = this.formularioHalloween.value;
      this.listaObjetos.push(nuevoObjeto);
      this.formularioHalloween.reset();
    }
  }
}