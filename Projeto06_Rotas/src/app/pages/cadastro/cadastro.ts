import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  statusMensagem = signal('Aguardando preenchimento...');

  salvar() {
    this.statusMensagem.set('Tentando conectar com API .NET...');
    // Próximos passos: Implementar o HttpClient aqui!
  }
}