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
    this.route.params.subscribe((params) => {
      this.item = this.shoppingListService.ingredients.find((ingredient) => {
        return ingredient.id == params.id;
      });
    });
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
