import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Essencial para o HTML entender as diretivas de rota
  templateUrl: './app.html'
})
export class App { }