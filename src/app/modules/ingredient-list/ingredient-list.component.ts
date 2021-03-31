import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientList: Array<Object>;
  showTotal = false;
  displayedColumns = ['quantity', 'measure', 'foodMatch', 'cal', 'weight'];

  constructor(
    private ingredientService: IngredientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ingredientService.getIngredientList().subscribe(result => {
      this.ingredientList = result;
    });
    if (!this.ingredientList) {
      this.router.navigate(['add']);
    }
  }

  showTotalNutrition() {
    this.showTotal = true;
  }

}
