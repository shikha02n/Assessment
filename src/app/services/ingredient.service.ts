import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable()
export class IngredientService {
  ingredients = [] || ['1 lt milk', '1 dozen mango'];

  constructor(private apiService: ApiService) {}

  setIngredients (ingredients) {
    this.ingredients = ingredients;
  }

  getIngredientList() {
    return this.apiService.post('/saveIngredients', this.ingredients);
  }

  getNutritionBreakdown() {
    return this.apiService.get('/nutrition');
  }
}
