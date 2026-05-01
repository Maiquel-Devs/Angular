import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], 
  templateUrl: './home.html', // Aponta para o HTML da própria pasta
  styleUrl: './home.css'      // Aponta para o CSS da própria pasta
})
export class Home {
  // Lógica da página inicial aqui

  titulo = 'Dashboard de Controle';
  dataAcesso = new Date().toLocaleDateString();
}