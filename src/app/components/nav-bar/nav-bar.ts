import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Temas } from '../temas/temas';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, Temas],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  lista() {}
}