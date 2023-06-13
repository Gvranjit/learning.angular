import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from './recipe-list-item.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css'],
})
export class RecipeListItemComponent {
  @Input() recipe: Recipe;
  // @Output() recipeSelect = new EventEmitter<Recipe>();
  //when one of the recipes is clicked, emit their data so that it can caught by the details component
  constructor(private recipeService: RecipeService) {}

  onRecipeSelect(event: Recipe) {
    // this.recipeSelect.emit(event);
    this.recipeService.selectRecipe(event);
  }
}
