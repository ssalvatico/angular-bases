import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBZMainPageComponent } from './pages/main.page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    DBZMainPageComponent,
    CharacterListComponent,
    AddCharacterComponent,
  ],
  imports: [CommonModule],
  exports: [DBZMainPageComponent],
})
export class DbzModule {}
