import { Component, OnInit } from '@angular/core';
import { LogService } from './root/shared/log.service';
import { PageService } from './root/shared/page.service';
import { RecipeService } from './root/shared/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService, PageService, RecipeService],
})
export class AppComponent implements OnInit {
  title = "Gaurav's New Angular App - Only for learning purposes";
  name = 'Code';
  currentPage = 'shopping';
  constructor(
    private logService: LogService,
    private pageService: PageService
  ) {}
  ngOnInit() {
    this.pageService.pageSelected.subscribe((e: MenuOptions) => {
      this.currentPage = e;
      this.logService.logToConsole('CURRENT PAGE IS :' + this.currentPage);
    });
  }
  updateCurrentPage(e: string) {}
}
