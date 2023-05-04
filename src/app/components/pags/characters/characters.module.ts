import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiListComponent } from './api-list/api-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    ApiListComponent,
    CharacterCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ApiListComponent
  ]
})
export class CharactersModule { }
