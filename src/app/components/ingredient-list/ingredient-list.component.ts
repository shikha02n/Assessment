import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientList: [];
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ingredientList = this.appService.getIngredientList();
    if (!this.ingredientList) {
      this.router.navigate(['add']);
    }
  }

}
