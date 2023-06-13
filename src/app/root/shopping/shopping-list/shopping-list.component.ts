import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../../shared/shoppingList.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute
  ) {}
  ingredients: Ingredient[] = [];
  @Input() mainTitle: string;

  ngOnInit(): void {
    // this.ingredients = this.shoppingListService.ingredients; //this doesnt work anymore because I made ingredients list an asynchronous
    //lets do the above using a resolver being passed down as data while the route is being loaded
    this.ingredients = this.route.snapshot.data['ingredients'];
    console.log(this.ingredients);
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
