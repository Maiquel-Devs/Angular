import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class App {
  
  // Simulação do Banco de Dados em Memória (Lista de produtos)
  listaProdutos = signal(['Notebook', 'Mouse', 'Teclado'])

  adicionar(novo : string) {
    if(novo) {
      // Adiciona o novo item no final da lista
      this.listaProdutos.update(atual => [...atual, novo]); // Pega todos os itens da lista + o intem novo e cria uma nova lista
    }
  }

  remover(itemNome : string) {
    // Remove o item da lista
    this.listaProdutos.update(atual => atual.filter(p => p !== itemNome));  // Pega todos os intens que tem nome diferente do excluido e forma uma nova lista
  }

}

/*

- Aqui o Arrays são imutáveis, por isso usamos o update para criar uma nova lista
- No @Input não podemos usar o 

-- As vantagens dos Arrais imutáveis é que eles são mais rápidos e leves que os Arrais mutáveis, 
pois eles não precisam recarregar a página toda vez que um item é adicionado ou removido


*/ 