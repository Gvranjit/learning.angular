import { EventEmitter, Injectable } from '@angular/core';
Injectable();
export class PageService {
  selectedPage: MenuOptions = 'recipe';
  pageSelected = new EventEmitter<MenuOptions>();
  selectPage(pageTitle: MenuOptions) {
    //set the current page as well as emit an event to let everywhere else know that it happened.
    this.selectedPage = pageTitle;
    this.pageSelected.emit(pageTitle);
  }
}
