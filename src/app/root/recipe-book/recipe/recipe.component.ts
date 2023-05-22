import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelect = new EventEmitter<Recipe>();

  //when one of the recipes is clicked, emit their data so that it cant caught by the details component
  onRecipeSelect(event: Recipe) {
    console.log(event);
    this.recipeSelect.emit(event);
  }
}
