import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-halloween',
  imports: [],
  templateUrl: './tarjeta-halloween.html',
  styleUrl: './tarjeta-halloween.css'
})
export class TarjetaHalloweenComponent {
  objetoItem = input({ imagen: '', objeto: '', descripcion: '', propietario: '' });
}
