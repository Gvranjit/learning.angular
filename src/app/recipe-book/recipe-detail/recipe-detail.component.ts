import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list-item/recipe-list-item.model';
import { RecipeService } from '../../shared/recipe.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  recipe: Recipe;
  openManageRecipeDropdown: boolean;
  recipeSelectdSubscription: Subscription;
  index: number;
  // recipe: Recipe = new Recipe('test', 'test', 'path', 'string');
  toggleManageRecipeDropdown() {
    this.openManageRecipeDropdown = !this.openManageRecipeDropdown;
  }

  ngOnInit() {
    // this.recipeSelectdSubscription =
    //   this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //     this.recipe = recipe;
    //   });

    this.route.params.subscribe((params) => {
      this.recipe = this.recipeService.recipes[+params['index']];
      this.index = params['index'];
    });
  }
  ngOnDestroy(): void {
    // this.recipeSelectdSubscription.unsubscribe();
    /// route params observables are  cleaned up by angular itself  so ther is no need for a unsubscribe action
  }
  onEditRecipe() {
    console.log('IT WORKS');
  }
}
