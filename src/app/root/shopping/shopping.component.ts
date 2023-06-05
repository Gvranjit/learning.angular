import { Component } from '@angular/core';
import { ShoppingListService } from '../shared/shoppingList.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent {
  shoppingTitle: string = 'Shopping list';
}
