import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from './recipe-list-item.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css'],
})
export class RecipeListItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() recipeSelect = new EventEmitter<Recipe>();
  //when one of the recipes is clicked, emit their data so that it can caught by the details component
  constructor(public recipeService: RecipeService) {}
}
