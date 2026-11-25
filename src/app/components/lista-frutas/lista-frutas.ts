import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-frutas',
  imports: [],
  templateUrl: './lista-frutas.html',
  styleUrl: './lista-frutas.css',
})
export class ListaFrutas {

  frutas = [
    { nombre: 'naranja', like: false, imagen: '/images/naranja.PNG' },
    { nombre: 'uvas', like: true, imagen: '/images/uvas.PNG' },
    { nombre: 'melón', like: false, imagen: '/images/melon.PNG' },
    { nombre: 'pera', like: false, imagen: '/images/pera.PNG' },
    { nombre: 'fresas', like: true, imagen: '/images/fresas.PNG' }
  ];
}
