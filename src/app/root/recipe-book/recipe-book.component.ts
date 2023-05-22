import { Component } from '@angular/core';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent {
  recipe: Recipe;
  showRecipeDetail(event: Recipe) {
    console.log('EVENT FIRING', event);
    this.recipe = event;
  }
}
