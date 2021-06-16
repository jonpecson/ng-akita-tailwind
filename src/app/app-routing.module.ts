import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  
  { path: '',   redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/' },  // Wildcard route for a 404 page
  {
    path: '',
    loadChildren: () => import('./cards/cards.module').then((m) => m.CardsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
