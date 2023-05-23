import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipe: Recipe;
  openManageRecipeDropdown: boolean;
  // recipe: Recipe = new Recipe('test', 'test', 'path', 'string');
  toggleManageRecipeDropdown() {
    this.openManageRecipeDropdown = !this.openManageRecipeDropdown;
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}
