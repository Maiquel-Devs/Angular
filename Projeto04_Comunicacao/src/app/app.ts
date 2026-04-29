import { Component, signal } from '@angular/core';
import { Filho } from './components/filho/filho';   // importando o componente filho

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Filho],  // importando o componente filho
  templateUrl: './app.html',
})
export class App {
  
  usuarioNome = signal('João Lucas')

  limparNome(){
    this.usuarioNome.set('Nome Resetado')
  }
  
}

