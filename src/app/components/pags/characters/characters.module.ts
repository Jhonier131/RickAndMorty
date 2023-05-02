import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiListComponent } from './api-list/api-list.component';

@NgModule({
  declarations: [
    ApiListComponent,
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
