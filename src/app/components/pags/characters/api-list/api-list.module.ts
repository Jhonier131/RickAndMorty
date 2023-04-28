import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiListRoutingModule } from './api-list-routing.module';
import { ApiListComponent } from './api-list.component';


@NgModule({
  declarations: [ApiListComponent],
  imports: [
    CommonModule,
    ApiListRoutingModule
  ]
})
export class ApiListModule { }
