import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input('recipe') recipe: Recipe = new Recipe(
    'test',
    'test',
    'path',
    'string'
  );
  openManageRecipeDropdown: boolean;
  // recipe: Recipe = new Recipe('test', 'test', 'path', 'string');
  toggleManageRecipeDropdown() {
    this.openManageRecipeDropdown = !this.openManageRecipeDropdown;
  }
}
