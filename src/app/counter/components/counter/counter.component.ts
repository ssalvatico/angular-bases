import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    // templateUrl :'./counter.component.html',
    template: `
<b>Counter Component</b>
<div>
  <p>Count is: {{counter}}</p>
  <button id="counterChanger" (click)="updateCounter(-1)"> - </button>
  <button id="counterChanger" (click)="counter = 0">Reset</button>
  <button id="counterChanger" (click)="updateCounter(+1)"> + </button>
</div>
<hr>`,
    styleUrl: './counter.component.css',
    standalone: false,
})
export class CounterComponent {

    protected counter:number = 0;
    updateCounter(value:number) : void { this.counter+=value; }

    constructor(){}
}