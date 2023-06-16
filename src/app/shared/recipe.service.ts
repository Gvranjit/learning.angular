import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipe-list-item/recipe-list-item.model';

@Injectable()
export class RecipeService {
  public selectedRecipe: Recipe;
  recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'This is  a first description of the recipe. It can be quite long but it might not be the most helpful',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-bibimbap-in-a-bowl.jpg?resize=350%2C200&ssl=1',
      'some ingredient'
    ),
    new Recipe(
      'Second recipe',
      'This is the description for the second recipe',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-bibimbap-in-a-bowl.jpg?resize=350%2C200&ssl=1',
      'another ingredient'
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();
  selectRecipe(index: number) {
    //first set the current recipe
    this.selectedRecipe = this.recipes[index];
    //let everyone else know that it changed
    // this.recipeSelected.emit(this.selectedRecipe);
  }
  updateRecipe(index: number, data: Partial<Recipe>) {
    this.recipes[index] = { ...this.recipes[index], ...data };
  }
}
