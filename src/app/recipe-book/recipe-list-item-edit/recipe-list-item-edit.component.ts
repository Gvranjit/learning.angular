import { Component, Input, OnInit } from '@angular/core';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { Recipe } from '../recipe-list-item/recipe-list-item.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-list-item-edit',
  templateUrl: './recipe-list-item-edit.component.html',
  styleUrls: ['./recipe-list-item-edit.component.css'],
})
export class RecipeListItemEditComponent implements OnInit {
  index: number = +this.route.snapshot.params['index'];
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  updatedRecipeData: Partial<Recipe> = {};
  ngOnInit(): void {
    this.setInitialData();
  }
  private setInitialData() {
    this.updatedRecipeData = {
      ...this.recipeService.recipes[this.index],
    };
  }

  onUpdate() {
    this.recipeService.updateRecipe(this.index, this.updatedRecipeData);
    this.location.back();
  }
  onReset() {
    this.setInitialData();
  }
}
