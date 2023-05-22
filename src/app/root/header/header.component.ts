import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output('menuSelect') activeMenu = new EventEmitter<string>();
  selectMenu(menuId: string) {
    this.activeMenu.emit(menuId);
  }
}
