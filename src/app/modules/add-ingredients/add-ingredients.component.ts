import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent implements OnInit {

  constructor(
    private router: Router,
    private ingredientService: IngredientService
  ) { }

  ngOnInit(): void {
  }

  analyse(form: NgForm) {
    let ingredients = form.value.ingredients.split('\n');
    ingredients = ingredients.filter(function (item) { return item !== "" });
    this.ingredientService.setIngredients(ingredients);
    this.router.navigate(['list']);
  }

}
