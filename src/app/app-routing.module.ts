import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./components/pags/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'personajes',
    loadChildren: () =>
      import('./components/pags/characters/characters.module').then(
        (m) => m.CharactersModule 
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
