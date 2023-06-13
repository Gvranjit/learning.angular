import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListItemComponent } from './shopping/shopping-list-item/shopping-list-item.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth-guard-service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { ShoppingListResolverService } from './shared/shopping-list.resolver.service';

const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingComponent,
    resolve: { ingredients: ShoppingListResolverService },
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [RouterModule.forRoot(routes, { useHash: false })], // this is the default useHash which allows for prettier routing but might cause issues during deployment which is dependent on the configuration of the server where the app is being hosted in.
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
