import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DBZMainPageComponent } from './pages/main.page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    DBZMainPageComponent,
    CharacterListComponent,
    AddCharacterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DBZMainPageComponent],
})
export class DbzModule {}
