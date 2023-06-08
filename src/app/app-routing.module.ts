import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './root/shopping/shopping.component';
import { ShoppingListItemComponent } from './root/shopping/shopping-list-item/shopping-list-item.component';
import { RecipeBookComponent } from './root/recipe-book/recipe-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootComponent } from './root/root.component';
import { AuthGuard } from './shared/auth-guard-service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';

const routes: Routes = [
  { path: '', component: RootComponent },
  {
    path: 'shopping',
    component: ShoppingComponent,
    canActivateChild: [AuthGuard],

    children: [
      {
        path: ':id',
        component: ShoppingListItemComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },

  { path: 'recipe', component: RecipeBookComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
