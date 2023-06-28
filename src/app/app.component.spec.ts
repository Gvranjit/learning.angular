import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './shopping/ingredient/ingredient.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeListItemComponent } from './recipe-book/recipe-list-item/recipe-list-item.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListItemComponent } from './shopping/shopping-list-item/shopping-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RecipeListItemEditComponent } from './recipe-book/recipe-list-item-edit/recipe-list-item-edit.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth-guard-service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { ShoppingListResolverService } from './shared/shopping-list.resolver.service';
import { ShoppingListService } from './shared/shoppingList.service';
let fixture: ComponentFixture<AppComponent>;
describe('AppComponent', () => {
  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        ShoppingComponent,
        ShoppingListComponent,
        ShoppingListEditComponent,
        IngredientComponent,
        RecipeBookComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeListItemComponent,
        HeaderComponent,
        DropdownDirective,
        ShoppingListItemComponent,
        PageNotFoundComponent,
        HomeComponent,
        RecipeListItemEditComponent,
      ],
      providers: [
        AuthService,
        AuthGuard,
        CanDeactivateGuard,
        ShoppingListResolverService,
        ShoppingListService,
      ],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });
  it('should create the app component', () => {
    fixture = TestBed.createComponent(AppComponent);
    let app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'Learning Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Learning Angular');
  });
  it('should have OnInit function', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    let app = fixture.componentInstance;

    app.ngOnInit();
    fixture.detectChanges();
    fixture
      .whenStable()
      .then(() => {
        console.log(typeof app.currentPage);
        expect(app.currentPage).toBeTruthy();
      })
      .catch();
  });
});
