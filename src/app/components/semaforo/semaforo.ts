import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {

  contador = signal(999);

  incrementar(){
    this.contador.update(valor => valor + 1);
  }

  decrementar(){
    this.contador.update(valor => valor - 1);
  }

  resetear(){
    this.contador.set(0);
  }
}