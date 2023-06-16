import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-list-item/recipe-list-item.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() setRecipeDetail = new EventEmitter<Recipe>();

  // showRecipeDetail(event: Recipe) {
  //   this.setRecipeDetail.emit(event);
  // }
  constructor() {}
}
