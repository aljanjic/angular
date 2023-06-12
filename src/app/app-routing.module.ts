import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";





const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children:[
    { path:'', component: SelectRecipeComponent},
    { path:':id', component: RecipeDetailComponent },
    // { path:'', component: SelectRecipeComponent }
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];


@NgModule({
    imports:[
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)

    ],
    exports:[RouterModule]

})

export class AppRoutingModule {}