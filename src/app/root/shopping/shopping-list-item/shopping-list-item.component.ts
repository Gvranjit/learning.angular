import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../../shared/shoppingList.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css'],
})
export class ShoppingListItemComponent implements OnInit {
  item: Ingredient;
  constructor(
    public route: ActivatedRoute,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.item = this.shoppingListService.ingredients.find((ingredient) => {
      console.log('INGREDIENT', ingredient);
      return ingredient.id == this.route.snapshot.params.id;
    });
  }
}
