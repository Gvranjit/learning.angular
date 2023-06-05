import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogService } from './root/shared/log.service';
import { PageService } from './root/shared/page.service';
import { RecipeService } from './root/shared/recipe.service';
import { ShoppingListService } from './root/shared/shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService, PageService, RecipeService, ShoppingListService],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "Gaurav's New Angular App - Only for learning purposes";
  name = 'Code';
  currentPage = 'shopping';
  paramsSubscription: Subscription;
  constructor(
    private logService: LogService,
    private pageService: PageService
  ) {}
  ngOnInit() {
    this.paramsSubscription = this.pageService.pageSelected.subscribe(
      (e: MenuOptions) => {
        this.currentPage = e;
        this.logService.logToConsole('CURRENT PAGE IS :' + this.currentPage);
      }
    );
  }
  ngOnDestroy() {}
  updateCurrentPage(e: string) {
    this.paramsSubscription.unsubscribe();
  }
}
