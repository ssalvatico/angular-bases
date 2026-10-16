import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class HeroComponent {

  public name:string = 'Ironman';
  public age:number = 45;

  // Se ve como una propiedad pero es un método
  changeHero(): void {
    // this.name = (this.name === 'Ironman') ? 'Spiderman' : 'Ironman';
    this.name = 'Spiderman';
  }

  changeAge(): void {
    // this.age = (this.age === 45) ? 20 : 45;
    this.age = 20;
  }

  resetValues(): void {
    this.name = 'Ironman';
    this.age = 45;

    // Esto rompe el ciclo de deteccion de cambios de Angular
    // document.querySelectorAll('h1')!.forEach(element => element.innerHTML = '<h1>Desde Angular</h1>');
  }
  
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName() : string {
    return this.name.toUpperCase();
  }
}
