import { Component, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  contador = signal(0);
num = -1;
  primerdigito(){
   
    
  }

  uno(){
    this.contador.set(1);
  }

  dos(){
    this.contador.set(2);
  }

  tres(){
    this.contador.set(3);
  }

  cuatro(){
    this.contador.set(4);
  }

  cinco(){
    this.contador.set(5);
  }

  seis(){
    this.contador.set(6);
  }

  siete(){
    this.contador.set(7);
  }

  ocho(){
    this.contador.set(8);
  }

  nueve(){
    this.contador.set(9);
  }

  nada(){
  
  }


}


