import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Temas } from '../temas/temas';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, MatToolbarModule, Temas],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  private router = inject(Router);

  lista() {
    this.router.navigate(['/lista-frutas']);
  }
}
