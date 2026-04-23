import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';   // Importado para utilizar o [()] -> Two-Way Data Binding

@Component({
  selector: 'app-root',
  imports: [FormsModule],   // Adciona o FormsModule no Array de Imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly nome = signal('João');  // Interpolação, variável que será exibida no HTML com {{ }} 

}
