import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes {
  
  personajes: Personaje[] = [
    new Personaje('pepe', 'Es alto.', true, '/images/pepe.jpg'),
    new Personaje('alberto', 'Es mediano.', false, '/images/alberto.jpg'),
    new Personaje('hector', 'Es bajito.', true, '/images/hector.jpg')
  ];
}

class Personaje {
  nombre: string;
  descripcion: string;
  like: boolean;
  imagen: string;

  constructor(n: string, d: string, l: boolean, i: string) {
    this.nombre = n;
    this.descripcion = d;
    this.like = l;
    this.imagen = i;
  }
}