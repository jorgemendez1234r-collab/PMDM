import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { ListaFrutas } from './components/lista-frutas/lista-frutas';
import { FormularioHalloween } from './components/formulario-halloween/formulario-halloween';
import { Calculadora } from './components/calculadora/calculadora';

export const routes: Routes = [
    
{ path: '', component: Semaforo },
{ path: 'formulario-halloween', component: FormularioHalloween },
{ path: 'lista-frutas', component: ListaFrutas },
{ path: 'semaforo', component: Semaforo},
{ path: 'calculadora', component: Calculadora},
{ path: '**', component: ListaFrutas}, 

];
