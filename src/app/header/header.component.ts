import { Component, EventEmitter, Output } from '@angular/core';
import { PageService } from '../shared/page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // @Output('menuSelect') activeMenu = new EventEmitter<string>();

  loggedIn: boolean = false;
  constructor(
    private pageService: PageService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.loggedIn = this.authService.loggedIn;
  }
  selectMenu(menuId: MenuOptions) {
    this.pageService.selectPage(menuId);
  }
  navigateToHome() {
    //complex calculations
    this.router.navigate(['/'], { relativeTo: this.route });
  }
  login() {
    this.loggedIn = this.authService.logIn();
  }
  logout() {
    this.loggedIn = this.authService.logOut();
  }
}
