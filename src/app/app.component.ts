import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly title = 'Primer App de Angular';
  protected readonly welcome = 'Bienvenido!';
}
