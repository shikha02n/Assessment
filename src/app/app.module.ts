import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { AddIngredientsComponent } from './components/add-ingredients/add-ingredients.component';

import { routes } from './app.routing';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    IngredientListComponent,
    NutritionComponent,
    AddIngredientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
