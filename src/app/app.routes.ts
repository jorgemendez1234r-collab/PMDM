import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { ListaFrutas } from './components/lista-frutas/lista-frutas';
import { FormularioHalloween } from './components/formulario-halloween/formulario-halloween';
import { Calculadora } from './components/calculadora/calculadora';
import { Personajes } from './components/personajes/personajes';

export const routes: Routes = [
  { path: '', component: Semaforo },
  { path: 'semaforo', component: Semaforo },
  { path: 'lista-frutas', component: ListaFrutas },
  { path: 'formulario-halloween', component: FormularioHalloween },
  { path: 'calculadora', component: Calculadora },
  { path: 'personajes', component: Personajes },
  { path: '**', component: ListaFrutas }
];