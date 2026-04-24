import { Component, signal } from '@angular/core';    // Importa o signal do Angular para criar sinais

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Criando um sinal numérico inicializado em 0
  protected contador = signal(0);

  // Método para incrementar o valor
  incrementar() {
    this.contador.update(valor => valor + 1);
  }

  // Método para decrementar o valor
  decrementar() {
    this.contador.update(valor => valor - 1);
  }
}