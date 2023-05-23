import { Component, EventEmitter, Output } from '@angular/core';
import { PageService } from '../shared/page.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // @Output('menuSelect') activeMenu = new EventEmitter<string>();
  constructor(private pageService: PageService) {}
  selectMenu(menuId: MenuOptions) {
    this.pageService.selectPage(menuId);
  }
}
