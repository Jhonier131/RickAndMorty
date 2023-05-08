import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiListComponent } from './api-list/api-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';

const routes: Routes = [
  { path: '', component: ApiListComponent },
  // { path: '', component: CharacterCardComponent },
  { path: 'personaje', pathMatch: 'full', component: CharacterCardComponent   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiListRoutingModule {}
