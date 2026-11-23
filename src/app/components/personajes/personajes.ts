import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  imports: [],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes {
  personajes = [
    { nombre: 'pepe', descripcion: 'Es alto.', like: true, imagen: '/images/pepe.jpg' },
    { nombre: 'alberto', descripcion: 'Es mediano.', like: false, imagen: '/images/alberto.jpg' },
    { nombre: 'hector', descripcion: 'Es bajito.', like: true, imagen: '/images/hector.jpg' }
  ];
}
