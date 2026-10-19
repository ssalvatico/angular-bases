import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character-list',
  standalone: false,
  styleUrl: './character-list.component.css',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  @Input()
  public characterList:CharacterInterface[] = [];

  @Output()
  onDeleteID: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id:string): void {
    this.onDeleteID.emit(id);
  }
}
