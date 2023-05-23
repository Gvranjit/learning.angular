import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() setRecipeDetail = new EventEmitter<Recipe>();
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
  // showRecipeDetail(event: Recipe) {
  //   this.setRecipeDetail.emit(event);
  // }
  constructor() {}
}
