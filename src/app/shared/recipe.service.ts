import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipe-list-item/recipe-list-item.model';

@Injectable()
export class RecipeService {
  private selectedRecipe: Recipe;
  recipeSelected = new EventEmitter<Recipe>();
  selectRecipe(recipe: Recipe) {
    //first set the current recipe
    this.selectedRecipe = recipe;
    //let everyone else know that it changed
    this.recipeSelected.emit(recipe);
  }
}
