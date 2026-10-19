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
    //TODO convertir el servicio en un servicio privado
    constructor( public dbzService: DBZService) {}
}