import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { LogService } from './shared/log.service';
import { PageService } from './shared/page.service';
import { RecipeService } from './shared/recipe.service';
import { ShoppingListService } from './shared/shoppingList.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService, PageService, RecipeService],
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
