import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @Input() amount: number;
  @Output() addButtonClicked = new EventEmitter<{
    name: string;
    amount: number;
    urgency: string;
  }>();

  @ViewChild('newItemUrgency') urgency: ElementRef<HTMLInputElement>;

  onAddClick(name: string) {
    console.log(
      'on ad click was triggered and event was emmited',
      'NAME',
      name,
      'Amount',
      this.amount
    );
    this.addButtonClicked.emit({
      name,
      amount: Number(this.amount),
      urgency: this.urgency.nativeElement.value,
    });
  }
}
