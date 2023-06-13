import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { IngredientComponent } from './shopping/ingredient/ingredient.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeListItemComponent } from './recipe-book/recipe-list-item/recipe-list-item.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListEditComponent } from './shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListItemComponent } from './shopping/shopping-list-item/shopping-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth-guard-service';
import { AuthService } from './shared/auth.service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { ShoppingListResolverService } from './shared/shopping-list.resolver.service';
import { ShoppingListService } from './shared/shoppingList.service';

//MOVED THE BELOW TO APP ROUTING MODULE FILE
// const appRoutes: Routes = [
//   { path: '', component: AppComponent },
//   {
//     path: 'shopping',
//     component: ShoppingComponent,
//     children: [{ path: ':id', component: ShoppingListItemComponent }],
//   },

//   { path: 'recipe', component: RecipeBookComponent },
//   { path: 'not-found', component: PageNotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },
// ];

@NgModule({
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ShoppingListResolverService,
    ShoppingListService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
