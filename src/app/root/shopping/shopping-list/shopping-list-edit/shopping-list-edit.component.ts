import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/root/shared/ingredient.model';
import { ShoppingListService } from 'src/app/root/shared/shoppingList.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}
  amount: number;

  @ViewChild('newItemUrgency') urgency: ElementRef<HTMLInputElement>;

  onAddClick(name: string) {
    console.log(
      'on addclick was triggered and event was emmited',
      'NAME',
      name,
      'Amount',
      this.amount
    );
    this.shoppingListService.addOrUpdateIngredients({
      name,
      amount: this.amount,
      urgency: this.urgency.nativeElement.value,
    });
  }
}
