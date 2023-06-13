import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../../../shared/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService) {}

  recipe: Recipe;
  openManageRecipeDropdown: boolean;
  recipeSelectdSubscription: Subscription;
  // recipe: Recipe = new Recipe('test', 'test', 'path', 'string');
  toggleManageRecipeDropdown() {
    this.openManageRecipeDropdown = !this.openManageRecipeDropdown;
  }

  ngOnInit() {
    this.recipeSelectdSubscription =
      this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
        this.recipe = recipe;
      });
  }
  ngOnDestroy(): void {
    this.recipeSelectdSubscription.unsubscribe();
  }
}
