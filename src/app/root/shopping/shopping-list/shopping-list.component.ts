import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/shoppingList.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(public shoppingListService: ShoppingListService) {}
  ingredients: Ingredient[] = [];
  @Input() mainTitle: string;

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
    //add a listener
    this.shoppingListService.ingredientListUpdated.subscribe(
      (event: Ingredient[]) => {
        this.ingredients = event;
      }
    );
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('On changes works. The changes are ', changes);I am g
  // }

  updateValue(e: {
    name: string;
    amount: number;
    urgency: 'URGENT' | 'NORMAL';
  }) {
    this.shoppingListService.addOrUpdateIngredients(e);
  }
}
