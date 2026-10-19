import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,
  styleUrl: './add-character.component.css',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<CharacterInterface> = new EventEmitter();

  public character:CharacterInterface = {
    name: '',
    ki: 0,
  };

  addCharacter():void {
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {name: '', ki: 0};
  }
}
