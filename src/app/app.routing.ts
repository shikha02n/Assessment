import { Routes } from "@angular/router";
import { AddIngredientsComponent } from "./components/add-ingredients/add-ingredients.component";
import { IngredientListComponent } from "./components/ingredient-list/ingredient-list.component";

export const routes: Routes = [
  {
    path: 'add',
    component: AddIngredientsComponent
  },
  {
    path: 'list',
    component: IngredientListComponent
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
