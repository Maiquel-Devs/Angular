import { Routes } from '@angular/router';
import { Origem } from './pages/origem/origem';
import { Bushido } from './pages/bushido/bushido';
import { Curiosidades } from './pages/curiosidades/curiosidades';

export const routes: Routes = [
    { path: 'origem', component: Origem },            // URL: /origem
    { path: 'bushido', component: Bushido },          // URL: /bushido
    { path: 'curiosidades', component: Curiosidades },// URL: /curiosidades
    { path: '', redirectTo: 'origem', pathMatch: 'full' } // Rota padrão (Cai direto na origem)
];