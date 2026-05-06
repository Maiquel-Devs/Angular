import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-curiosidades',
  standalone: true,
  imports: [],
  templateUrl: './curiosidades.html',
  styleUrl: './curiosidades.css'
})
export class Curiosidades {
  tituloPagina = 'Curiosidades Históricas';

  // O Signal nasce populado com 3 fatos na memória
  fatos = signal([
    'A Katana não era a arma principal; eles usavam muito mais o arco e flecha (Yumi) e lanças.',
    'Existiram samurais estrangeiros na história, incluindo o lendário africano chamado Yasuke.',
    'As mulheres samurais existiam de verdade e eram conhecidas como Onna-bugeisha.'
  ]);

  // Adicionar fato (Gera um novo array por imutabilidade)
  adicionarFato(novoFato: string) {
    if (novoFato.trim() !== '') {
      this.fatos.update(lista => [...lista, novoFato]);
    }
  }

  // Remover fato (Filtra gerando uma nova referência de memória)
  removerFato(fatoRemover: string) {
    this.fatos.update(lista => lista.filter(f => f !== fatoRemover));
  }
}