import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../root/recipe-book/recipe/recipe.model';

@Injectable()
export class RecipeService {
  private selectedRecipe: Recipe;
  recipeSelected = new EventEmitter<Recipe>();
  selectRecipe(recipe: Recipe) {
    console.log('I AM IN THE SERVICE NOW');
    //first set the current recipe
    this.selectedRecipe = recipe;
    //let everyone else know that it changed
    this.recipeSelected.emit(recipe);
  }
}
