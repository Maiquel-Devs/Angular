import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,   // Indica que o componente é standalone
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected exibir = signal(false);

  // 1. Variável de sim/não
  ligado = signal(false);

  // 2. Lista simples
  frutas = signal(['Maçã', 'Banana', 'Uva']);

}
