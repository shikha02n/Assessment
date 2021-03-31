import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  nutritions: any = {};
  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getNutritionBreakdown().subscribe(result => {
      this.nutritions = result;
    });
  }

}
