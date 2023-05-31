import { Component, EventEmitter, Output } from '@angular/core';
import { PageService } from '../shared/page.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // @Output('menuSelect') activeMenu = new EventEmitter<string>();
  constructor(
    private pageService: PageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  selectMenu(menuId: MenuOptions) {
    this.pageService.selectPage(menuId);
  }
  navigateToHome() {
    //complex calculations
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
