import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list-item/recipe-list-item.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-recipe-list-item-edit',
  templateUrl: './recipe-list-item-edit.component.html',
  styleUrls: ['./recipe-list-item-edit.component.css'],
})
export class RecipeListItemEditComponent implements OnInit {
  index: number = +this.route.snapshot.params['index'];

  recipeDataForm = new FormGroup({
    recipeName: new FormControl('', [Validators.maxLength(4)]),
    recipeDescription: new FormControl('', []),
    recipeIngredient: new FormControl('', []),
  });

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
    const updatedRecipeData: Partial<Recipe> = {
      name: this.recipeDataForm.get('recipeName')?.value,
      description: this.recipeDataForm.get('recipeDescription')?.value,
      ingredient: this.recipeDataForm.get('recipeIngredient')?.value,
    };
    console.info(updatedRecipeData);
    this.recipeService.updateRecipe(this.index, updatedRecipeData);
    this.location.back();
  }
  onReset() {
    this.setInitialData();
  }
}
