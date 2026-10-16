import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class ListComponent {
  
  public heroNames:string[] = ['Spiderman','Ironman','Hulk','Thor','Sentry', 'Daredevil'];
  public lastDeletedHero:string|undefined = '';

  deleteLastHero(): void {
    this.lastDeletedHero = this.heroNames.pop();
  }
}
