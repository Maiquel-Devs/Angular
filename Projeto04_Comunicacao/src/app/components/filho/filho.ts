import { Component, input, output } from '@angular/core';   // importar input e output

@Component({
  selector: 'app-filho',
  standalone: true,
  templateUrl: './filho.html',
})
export class Filho {

  // @Input moderno (v20+): Recebe a informação do componente pai
  nomeRecebido = input<string>('');
  
  // @Output moderno (v20+): Envia informação para o componente pai
  notificarReset = output<void>();

  resetar() {
    // Emite o evento para o pai
    this.notificarReset.emit();
  }
  
}


// input: recebe informacoes do componente pai, output: envia informacoes para o componente pai
