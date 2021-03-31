import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('./modules/add-ingredients/add-ingredients.module').then(m => m.AddIngredientsModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./modules/ingredient-list/ingredient-list.module').then(m => m.IngredientListModule)
  },
  {
    path: '**',
    redirectTo: 'add'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'add'
  }
];
