import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ApiListComponent } from './api-list/api-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ApiListRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [
    ApiListComponent,
    CharacterCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ApiListRoutingModule
  ],
  exports: [
    ApiListComponent,
    CharacterCardComponent,
  ]
})
export class CharactersModule { }
