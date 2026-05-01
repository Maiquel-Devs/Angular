import { Routes } from '@angular/router';
import { Home } from './pages/home/home';  // importamos o componente home
import { Cadastro } from './pages/cadastro/cadastro'; // importamos o componente cadastro

export const routes: Routes = [
    { path: 'home', component: Home },        // URL: /home
    { path: 'cadastro', component: Cadastro }, // URL: /cadastro
    { path: '', redirectTo: 'home', pathMatch: 'full' }  // Rota padrão (redireciona para home)
];
