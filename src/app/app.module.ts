import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';
import { ShoppingListComponent } from './root/shopping/shopping-list/shopping-list.component';
import { IngredientComponent } from './root/shopping/ingredient/ingredient.component';
import { ShoppingComponent } from './root/shopping/shopping.component';
import { RecipeBookComponent } from './root/recipe-book/recipe-book.component';
import { RecipeListComponent } from './root/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './root/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './root/recipe-book/recipe/recipe.component';
import { HeaderComponent } from './root/header/header.component';
import { ShoppingListEditComponent } from './root/shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListItemComponent } from './root/shopping/shopping-list-item/shopping-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth-guard-service';
import { AuthService } from './shared/auth.service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';

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
    RootComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeComponent,
    HeaderComponent,
    DropdownDirective,
    ShoppingListItemComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
