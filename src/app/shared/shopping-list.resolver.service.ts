import { Resolve } from '@angular/router';
import { Ingredient } from './ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppingListService } from './shoppingList.service';
@Injectable()
export class ShoppingListResolverService implements Resolve<any> {
  constructor(private shoppingListService: ShoppingListService) {}
  resolve(): Promise<Ingredient[]> {
    return this.shoppingListService.getIngredientsList();
  }
}
