import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../../shared/shoppingList.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css'],
})
export class ShoppingListItemComponent implements OnInit, OnDestroy {
  item: Ingredient;
  paramsSubscription: Subscription;
  constructor(
    public route: ActivatedRoute,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(async (params) => {
      //   this.item = this.shoppingListService.ingredients.find((ingredient) => {
      //     return ingredient.id == params.id;
      //   }); //This doesnt work as ingredients is not only fetchable async
      //do something here to do the task asynchronously
      this.shoppingListService.getIngredientsList().then((ingredients) => {
        this.item = ingredients.find((ingredient) => {
          return ingredient.id == params.id;
        });
      });
    });
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
