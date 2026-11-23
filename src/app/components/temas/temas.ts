import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-temas',
  imports: [],
  templateUrl: './temas.html',
  styleUrl: './temas.css'
})
export class Temas {
  themeService = inject(ThemeService);

  cambiarTema() {
    this.themeService.toggleTheme();
  }
}
