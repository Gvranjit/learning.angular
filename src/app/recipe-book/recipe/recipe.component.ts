import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../../../shared/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  @Input() recipe: Recipe;
  // @Output() recipeSelect = new EventEmitter<Recipe>();
  //when one of the recipes is clicked, emit their data so that it can caught by the details component
  constructor(private recipeService: RecipeService) {}

  onRecipeSelect(event: Recipe) {
    // this.recipeSelect.emit(event);
    this.recipeService.selectRecipe(event);
  }
}
