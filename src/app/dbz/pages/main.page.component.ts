import { Component } from '@angular/core';
import { CharacterInterface } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    standalone: false,
    templateUrl: './main.page.component.html'
})
export class DBZMainPageComponent {

    // Servicio inyectado
    // Debe ser privado
    constructor( private dbzService: DBZService) {}
    
    get characters(): CharacterInterface[] {
        // retorno una copia por las dudas de que se modifique el objeto
        // asi no se modifica en el servicio
        return [...this.dbzService.characters];
    }

    deleteCharacterById(id:string): void {
        this.dbzService.deleteCharacterById(id);
    }

    addCharacter(character:CharacterInterface): void {
        this.dbzService.addCharacter(character);
    }
}