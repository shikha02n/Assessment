import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './ingredient-list.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NutritionComponent } from './components/nutrition/nutrition.component';

const routes: Routes = [{
  path: 'list',
  component: IngredientListComponent
}];

@NgModule({
  declarations: [
    IngredientListComponent,
    NutritionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class IngredientListModule { }
