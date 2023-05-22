import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnChanges {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 4, 'NORMAL'),
    new Ingredient('Banana', 6, 'URGENT'),
  ];
  @Input() mainTitle: string;

  ngOnInit(): void {
    console.log('ON INIT WORKS');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes works. The changes are ', changes);
  }

  updateValue(e: {
    name: string;
    amount: number;
    urgency: 'URGENT' | 'NORMAL';
  }) {
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
  }
}
