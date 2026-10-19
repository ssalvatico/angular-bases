import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { CharacterInterface } from '../interfaces/character.interface';

console.log();

@Injectable({
    providedIn: 'root'
})
export class DBZService {

    public characters: CharacterInterface[] = [{
        id: uuid(),
        name: 'Goku',
        ki: 9500,
    },
    {
        id: uuid(),
        name: 'Krillin',
        ki: 1500,
    },
    {
        id: uuid(),
        name: 'Chaos',
        ki: 500,
    },
    {
        id: uuid(),
        name: 'Vegetta',
        ki: 8500,
    },
    {
        id: uuid(),
        name: 'Trunks',
        ki: 20000,
    }];

    onNewCharacter(character:CharacterInterface):void {
        const newCharacter:CharacterInterface = {...character, id: uuid() };
        this.characters = [...this.characters, newCharacter];
    }

    deleteCharacterById(id:string):void {
        this.characters = this.characters.filter((char) => char.id !== id);
    }

    // Menos robusto, usa index en vez de uuid
    // onDeleteID(index:number): void {
    //     this.characters.splice(index, 1);
    // }
}