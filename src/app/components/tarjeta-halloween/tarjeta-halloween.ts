import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-halloween',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-halloween.html',
  styleUrls: ['./tarjeta-halloween.css']
})
export class TarjetaHalloweenComponent {
  @Input() objetoItem: any;
}