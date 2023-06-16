import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list-item/recipe-list-item.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }
  // showRecipeDetail(event: Recipe) {
  //   console.log('EVENT FIRING', event);
  //   this.recipe = event;
  // }
}
