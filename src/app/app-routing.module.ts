import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: '/cards' },  // Wildcard route, catch all undefined route and redirect to home
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then((m) => m.CardsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
