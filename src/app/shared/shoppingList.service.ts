import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 4, 'NORMAL'),
    new Ingredient('Banana', 6, 'URGENT'),
  ];

  ingredientListUpdated = new EventEmitter<Ingredient[]>();

  addOrUpdateIngredients(e: Ingredient) {
    let found;
    for (let ingredient of this.ingredients) {
      if (ingredient.name === e.name) {
        ingredient.amount += e.amount;
        found = true;
      }
    }
    if (!found) {
      this.ingredients.push(new Ingredient(e.name, e.amount, e.urgency));
    }
    // after update is complete emit
    this.ingredientListUpdated.emit(this.ingredients);
  }
}
