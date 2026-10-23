import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-halloween',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-halloween.html',
  styleUrls: ['./formulario-halloween.css']
})
export class FormularioHalloween {
  formularioHalloween: FormGroup;
  listaObjetos: string[] = [];
  intentadoEnviar: boolean = false;

  constructor(private fb: FormBuilder) {
    this.formularioHalloween = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      objeto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }


  tieneError(nombreControl: string): boolean {
    const control = this.formularioHalloween.get(nombreControl);
    return !!(control && control.invalid && (control.touched || control.dirty || this.intentadoEnviar));
  }

  enviar() {
    this.intentadoEnviar = true; 
    
    if (this.formularioHalloween.valid) {
      const objetoIntroducido = this.formularioHalloween.get('objeto')?.value;
      this.listaObjetos.push(objetoIntroducido);
      
   
      this.formularioHalloween.patchValue({ objeto: '' });
      this.formularioHalloween.get('objeto')?.markAsUntouched();
      this.intentadoEnviar = false;
    }
  }
}