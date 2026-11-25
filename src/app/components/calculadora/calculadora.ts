import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  contador = signal('0');
  num = 0;
  operacion = '';
  nuevo = true;

  numero(n: number) {
    if (this.nuevo) {
      this.contador.set(String(n));
      this.nuevo = false;
    } else {
      this.contador.set(this.contador() + n);
    }
  }

  operar(op: string) {
    this.num = Number(this.contador());
    this.operacion = op;
    this.nuevo = true;
  }

  igual() {
    if (this.operacion == '') {
      return;
    }

    let segundo = Number(this.contador());
    let resultado = 0;

    if (this.operacion == '+') {
      resultado = this.num + segundo;
    }

    if (this.operacion == '-') {
      resultado = this.num - segundo;
    }

    if (this.operacion == '*') {
      resultado = this.num * segundo;
    }

    if (this.operacion == '/') {
      resultado = this.num / segundo;
    }

    this.contador.set(String(resultado));
    this.operacion = '';
    this.nuevo = true;
  }

  borrar() {
    this.contador.set('0');
    this.num = 0;
    this.operacion = '';
    this.nuevo = true;
  }
}