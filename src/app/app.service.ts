import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
  ingredients: [];

  setIngredients(ingredients) {
    this.ingredients = ingredients;
  }

  getIngredientList() {
    return this.ingredients;
  }
}
