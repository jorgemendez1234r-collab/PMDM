import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [],
  templateUrl: './temas.html',
  styleUrl: './temas.css'
})
export class Temas {
  protected themeService = inject(ThemeService);

  cambiarTema() {
    this.themeService.toggleTheme();
  }
}