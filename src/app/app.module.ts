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

import { routes } from './app.routing';
import { IngredientService } from './services/ingredient.service';
import { AddIngredientsModule } from './modules/add-ingredients/add-ingredients.module';
import { IngredientListModule } from './modules/ingredient-list/ingredient-list.module';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    AddIngredientsModule,
    IngredientListModule
  ],
  providers: [IngredientService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
