import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-bushido',
  standalone: true,
  imports: [],
  templateUrl: './bushido.html',
  styleUrl: './bushido.css',
})
export class Bushido 
{
  tituloPagina = 'O Código Bushido';
  
  // Signal para guardar o texto do princípio ativo na tela
  principioAtivo = signal('Clique em um dos princípios abaixo para meditar sobre ele.');

  // Função que atualiza o Signal quando o usuário clica no botão
  selecionarPrincipio(nome: string, significado: string) 
  {
    this.principioAtivo.set(`${nome} — ${significado}`);
  }
}
